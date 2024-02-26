import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDB } from "@/libs/mongodb";
import bcrypt from 'bcryptjs';
import axios from "axios";

export async function POST(request: Request) {

    const {usuario,nombreCompleto, correoElectronico, contrasena, recaptchaToken} = await request.json()
    console.log(usuario,nombreCompleto, correoElectronico, contrasena, recaptchaToken);

    if (!contrasena || contrasena.length < 8 ) 
    return NextResponse.json({
        message: "La contraseña debe tener al menos 8 caracteres"
    }, {
        status: 400
    }
    );


    try {
        const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
            params: {
                secret: '6LcbdYApAAAAAOM4XpFaowBZiz2iBZ_j-pD0NVZn',
                response: recaptchaToken
            }
        });

        if (!response.data.success) {
            return NextResponse.json({
                message: "Error en la verificación de reCAPTCHA"
            }, {
                status: 400
            });
        }
    } catch (error) {
        console.error("Error al verificar reCAPTCHA:", error);
        return NextResponse.error();
    }

    if (!contrasena || contrasena.length < 8) {
        return NextResponse.json({
            message: "La contraseña debe tener al menos 8 caracteres"
        }, {
            status: 400
        });
    }

    try {
        await connectDB();
        const userFound = await User.findOne({usuario});

    if  (userFound) return NextResponse.json({
        message: "El usuario ya existe"
    }, {
        status: 409
    }
    );

    const hashedPassword = await bcrypt.hash(contrasena, 12)

    const user = new User({
        usuario,
        nombreCompleto,
        correoElectronico,
        contrasena: hashedPassword
    })
    const savedUser = await user.save()
    console.log(savedUser)

    return NextResponse.json({
        _id:  savedUser._id,
        usuario: savedUser.usuario,
        nombreCompleto: savedUser.nombreCompleto,
        correoElectronico: savedUser.correoElectronico,
    });

    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }
}