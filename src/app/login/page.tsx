"use client"

import { signIn } from "next-auth/react"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

function LoginPage() {

    const [error, setError] = useState("");
    const router = useRouter()
    

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const res = await signIn('credentials',{
            usuario: formData.get('usuario'),
            contrasena: formData.get('contrasena'),
            redirect:false,
        });

        if (res?.error) return setError(res.error as string);

        if (res?.ok) return router.push('/dashboard');

        console.log(res);
    };

    return ( 
        <body>
            {error && <div className="error">{error}</div> }
            <div className="login">
                <h1>Login</h1>
                <div className="form">
                    <form onSubmit={handleSubmit} className="log-in"> 
                        <div className="login__field">
                            <input className="login__input" type="text" placeholder="Usuario"  name="usuario" />
                        </div>
                        <div className="login__field">
                            <input className="login__input" type="password" placeholder="Contraseña"  name="contrasena" />
                        </div>
                        <button className="login__submit">
                            <span className="button_text">Iniciar Sesión</span>
                        </button>
                        <p className="switch-form">¿No tienes una cuenta?<span className="register-link"><Link href={"../register"}>Registrate</Link></span></p>
                    </form>
                </div>
            </div>
        </body>
    )
}

export default LoginPage;