"use client"

import { signIn } from "next-auth/react"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import "./login.css"
import "../globals.css"
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
        <div>
            <div className="container">
                <header>
                    <h1>InnovaTube</h1>
                </header>
                {error && <div className="error">{error}</div> }
                <div className="form">
                    <form onSubmit={handleSubmit} className="log-in">
                        <h2>Login</h2> 
                        <div className="form-container">
                            <div className="login__field">
                                <input className="login__input" type="text" placeholder="Usuario"  name="usuario" />
                            </div>
                            <div className="login__field">
                                <input className="login__input" type="password" placeholder="Contraseña"  name="contrasena" />
                            </div>
                        </div>
                        <button className="login__submit">
                            <span className="button_text">Iniciar Sesión</span>
                        </button>
                        <div className="form-section">
                            <p>¿No tienes una cuenta?<span className="register-link"><Link href={"/register"}>Registrate</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;