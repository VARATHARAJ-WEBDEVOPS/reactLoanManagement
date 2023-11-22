import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import Navbar from '../navbar/navbar';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    });

    return (

        <div className="dashboard">
            <Navbar />
            <div className="dashboardContainer">
                <h1>Dashboard</h1>
            </div>
        </div>
    );
}

export default Dashboard;