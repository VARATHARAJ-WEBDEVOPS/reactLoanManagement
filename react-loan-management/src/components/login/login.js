import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {           
            navigate('/dashboard'); 
        }
    });

   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {

        if (!email && !password) {
            setError('Please provide both email and password.');
            return;
        } else if (!email) {
            setError('Please provide email.');
            return;
        } else if ( !password) {
            setError('Please provide password.');
            return;
        } else if ( email === "varathan2512002@gmail.com" && password === "sivasiva") {
            setError('');
            localStorage.setItem('token',email);
            navigate('/dashboard');
            return
        } else {
            setError('Invalid user!')
        }
    };

    return (
        <div className='login'>
            <h1>Login</h1>
            <input
                placeholder='Email'
                type="email"
                value={email}
                onChange={handleEmailChange}
            />
            <input
                placeholder='Password'
                type="password"
                value={password}
                onChange={handlePasswordChange}
            />
             <p>{error}</p>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
