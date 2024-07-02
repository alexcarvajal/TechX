import React from 'react'
import Logo from '../../assets/LogoHospital.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaUsers, FaCalendarAlt, FaHeartbeat, FaSignInAlt } from 'react-icons/fa'; // FaHeartbeat eliminado ya que no se utiliza
import './NavbarHome.css';
const NavbarHome = () => {
  return (
    <>
         <div className="navbarHome">
            <div className="navbarHome-header">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className="navbarHome-menu">
                    <Link to="/dashboard" className="navbarHome-item">
                        <FaHome className="icon" />
                        <span>Inicio</span>
                    </Link>
                    <Link to="/jobs" className="navbarHome-item">
                        <FaBriefcase className="icon" />
                        <span>Proyectos</span>
                    </Link>
                    <Link to="/monitoreo" className="navbarHome-item">
                        <FaHeartbeat className="icon" />
                        <span>Monitoreo</span>
                    </Link>
                    <Link to="/nosotros" className="navbarHome-item">
                        <FaUsers className="icon" />
                        <span>Nosotros</span>
                    </Link>
                    <Link to="/events" className="navbarHome-item">
                        <FaCalendarAlt className="icon" />
                        <span>Eventos</span>
                    </Link>
                </nav>
                <Link to="/" className="navbarHome-item logout-button">
                    <FaSignInAlt className="icon" />
                    <span>Ingresa</span>
                </Link>
            </div>
        </div>
    </>
  )
}

export default NavbarHome