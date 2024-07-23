import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';

export function Registro() {
    const [data, setData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleRegistro = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // implementar lógica para registro
        console.log('Datos de registro:', data);
        navigate('/login');
    };

    const signInWithGoogle = () => {
        console.log('Iniciar sesión con Google...');
    };

    const signInWithFacebook = () => {
        console.log('Iniciar sesión con Facebook...');
    };


    return (
        /*<section>
            <h1>Registro</h1>
            <form className="Registro" onSubmit={handleRegistro}>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">REGISTRARSE</button>
            </form>
        </section>
    );*/
        
    <div className="Registro-container">
        <h2>Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Your name"
                value={data.name}
                onChange={handleRegistro}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your email"
                value={data.email}
                onChange={handleRegistro}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Elija una contraseña"
                value={data.password}
                onChange={handleRegistro}
                required
            />
            <button type="submit">Register</button>
        </form>
        <div className="separator">or register with</div>
        <button onClick={signInWithGoogle} className="btn-google">
            Google
        </button>
        <button onClick={signInWithFacebook} className="btn-facebook">
            Facebook
        </button>
    </div>
    );
}



