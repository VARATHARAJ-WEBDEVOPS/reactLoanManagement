import React from "react";
import './navbar.css'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className="navbar">
            <div className="navNames">
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                    <p>Dashboard</p>
                </Link>
                <Link to="/create" style={{ textDecoration: 'none' }}>
                    <p>Create</p>
                </Link>
                <Link to="/read" style={{ textDecoration: 'none' }}>
                    <p>Read</p>
                </Link>
            </div>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    );
    }

export default Navbar;