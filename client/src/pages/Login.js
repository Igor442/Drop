import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleLogin = async (e) => {
        e.preventDefault();
        await AuthService.login(credentials);
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input 
                type="text" 
                placeholder="Usuário" 
                value={credentials.username} 
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} 
            />
            <input 
                type="password" 
                placeholder="Senha" 
                value={credentials.password} 
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} 
            />
            <button type="submit">Entrar</button>
        </form>
    );
};

export default Login;
