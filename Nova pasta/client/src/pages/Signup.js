import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const Signup = () => {
    const [userData, setUserData] = useState({ username: '', password: '' });

    const handleSignup = async (e) => {
        e.preventDefault();
        await AuthService.signup(userData);
    };

    return (
        <form onSubmit={handleSignup}>
            <h2>Cadastro</h2>
            <input 
                type="text" 
                placeholder="Usuário" 
                value={userData.username} 
                onChange={(e) => setUserData({ ...userData, username: e.target.value })} 
            />
            <input 
                type="password" 
                placeholder="Senha" 
                value={userData.password} 
                onChange={(e) => setUserData({ ...userData, password: e.target.value })} 
            />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default Signup;
