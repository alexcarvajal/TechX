import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '../../assets/LogoHospital.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaUsers, FaCalendarAlt, FaSignOutAlt, FaHeartbeat } from 'react-icons/fa'; // FaHeartbeat eliminado ya que no se utiliza

function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        console.log('Cerrando sesión...');
        navigate('/');
    };

    return (
        <div className="navbar">
            <div className="navbar-header">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className="navbar-menu">
                    <Link to="/dashboard" className="navbar-item">
                        <FaHome className="icon" />
                        <span>Inicio</span>
                    </Link>
                    <Link to="/jobs" className="navbar-item">
                        <FaBriefcase className="icon" />
                        <span>Proyectos</span>
                    </Link>
                    <Link to="/monitoreo" className="navbar-item">
                        <FaHeartbeat className="icon" />
                        <span>Monitoreo</span>
                    </Link>
                    <Link to="/nosotros" className="navbar-item">
                        <FaUsers className="icon" />
                        <span>Nosotros</span>
                    </Link>
                    <Link to="/events" className="navbar-item">
                        <FaCalendarAlt className="icon" />
                        <span>Eventos</span>
                    </Link>
                </nav>
                <Link to="/" className="navbar-item logout-button" onClick={handleLogout}>
                    <FaSignOutAlt className="icon" />
                    <span>Salir</span>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
