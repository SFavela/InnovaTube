"use client"

import axios, { AxiosError} from "axios"
import { signIn } from "next-auth/react"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

function RegisterPage() {

    const [error, setError] = useState("");
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const contrasena = formData.get("contrasena") as string;
        const confirmarContrasena = formData.get("confirmarContrasena") as string;

        if (contrasena !== confirmarContrasena) {
            setError("La contraseña y la confirmación de contraseña no coinciden");
            return;
        }

        try {
            const signupResponse = await axios.post("/api/auth/signup", {
                usuario: formData.get("usuario"), 
                nombreCompleto: formData.get("nombreCompleto"),
                correoElectronico: formData.get("correoElectronico"),
                contrasena: formData.get("contrasena"),
            });
            console.log(signupResponse);

            const res = await signIn('credentials',{
                usuario: signupResponse.data.usuario,
                contrasena: formData.get('contrasena'),
                redirect:false,
            });

            if (res?.ok) return router.push('/dashboard');

            console.log(res);

        } catch (error) {
            console.log(error)
            if (error instanceof AxiosError) {
                setError(error.response?.data.message);
            }
        }

    }

    return (
        <body>
            {error && <div className="error">{error}</div>}
                <h1>Registro</h1>
                <div className="form">
                    <form onSubmit={handleSubmit} className="registro">
                        <div className="login__field">
                            <input className="login__input" type="text" placeholder="Nombre completo" name="nombreCompleto" />
                        </div>
                        <div className="login__field">
                            <input className="login__input" type="text" placeholder="Usuario" name="usuario" />
                        </div>
                        <div className="login__field">
                            <input className="login__input" type="mail" placeholder="Correo Electrónico"  name="correoElectronico" />
                        </div>
                        <div className="login__field">
                            <input className="login__input" type="password" placeholder="Contraseña"  name="contrasena" />
                        </div>
                        <div className="login__field">
                            <input className="login__input" type="password" placeholder="Confirmar Contraseña"  name="confirmarContrasena" />
                        </div>
                        <button className="login__submit">
                            <span className="button_text">Crear cuenta</span>
                        </button>
                        <p className="switch-form">¿Ya tienes cuenta?<span className="login-link"><Link href={'../login'}>Inicar Sesión</Link></span></p>
                    </form>
                </div>
        </body>
    )
}

export default RegisterPage
