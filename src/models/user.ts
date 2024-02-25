import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    usuario: {
        type: String,
        required: true, 
        maxLength: 15,
        unique: true
    },
    nombreCompleto: {
        type: String,
        required: [true, "Nombre requerido"], 
        maxLength: 60
    },
    correoElectronico:{
        type: String,
        required:[true,"Correo electronico requerido"] ,
        unique: true,
    },
    contrasena:{
        type: String,
        required:[true,"Contraseña requerida"] ,
        select:false, //No se muestra en consultas a BD
        minLength: 8,
    },
});

const User = models.User || model("User", userSchema);
export default User;