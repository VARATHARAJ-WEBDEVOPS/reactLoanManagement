import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {           
            navigate('/dashboard'); 
        }
    });

    return (
        <div className="home">
            <h1>Loan Management</h1>
            <Link to="/login">
            <button>Get Started</button>
            </Link>
        </div>
    );
}

export default Home;
