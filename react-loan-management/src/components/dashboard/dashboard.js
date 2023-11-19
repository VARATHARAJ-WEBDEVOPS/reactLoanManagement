import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {           
            navigate('/');
        }
    });

    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    );
}

export default Dashboard;