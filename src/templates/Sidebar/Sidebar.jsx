import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '/logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaUsers, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        console.log('Cerrando sesión...');
        navigate('/');
    };

    return (
        <div className={`navbar ${isOpen ? 'open' : 'closed'}`}>
            <div className="navbar-header">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <button className="toggle-button" onClick={toggleNavbar}>
                    {isOpen ? '<' : '>'}
                </button>
            </div>
            <nav className="navbar-menu">
                <Link to="/dashboard" className="navbar-item">
                    <FaHome className="icon" />
                    {isOpen && <span>Inicio</span>}
                </Link>
                <Link to="/jobs" className="navbar-item">
                    <FaBriefcase className="icon" />
                    {isOpen && <span>Proyectos</span>}
                </Link>
                <Link to="/nosotros" className="navbar-item">
                    <FaUsers className="icon" />
                    {isOpen && <span>Nosotros</span>}
                </Link>
                <Link to="/events" className="navbar-item">
                    <FaCalendarAlt className="icon" />
                    {isOpen && <span>Eventos</span>}
                </Link>
                <Link to="/" className="navbar-item logout-button" onClick={handleLogout}>
                    <FaSignOutAlt className="icon" />
                    {isOpen && <span>Salir</span>}
                </Link>
            </nav>
        </div>
    );
}

export default Sidebar;
