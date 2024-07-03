import React, { useState, useEffect } from 'react';
import "./card.css";
import './Sidebar.css';
import Logo from '../../assets/LogoHospital.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaUsers, FaCalendarAlt, FaSignOutAlt, FaHeartbeat, FaRegClock, FaPills } from 'react-icons/fa'; // FaHeartbeat eliminado ya que no se utiliza
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Sidebar() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        console.log('Cerrando sesión...');
        navigate('/');
    };

    const [medicamentos, setAlertMedicamentos] = useState([]);
    const [openMedicamentos, setOpenMedicamentos] = useState(false);

    const [citas, setAlertCitas] = useState([]);
    const [openCitas, setOpenCitas] = useState(false);

    useEffect(() => {
        if (citas) {
            notifyCitas();
            <ToastContainer />
        }
    }, [citas]);

    const notifyCitas = () => {
        toast("Tienes una cita pendiente!");
    };

    useEffect(() => {
        if (medicamentos) {
            notifyMedicamentos();
            <ToastContainer />
        }
    }, [medicamentos]);

    const notifyMedicamentos = () => {
        toast("Alerta de medicamento!");
    };
   

    useEffect(() => {
        const interval1= setInterval(() => {
            setAlertMedicamentos((prevNotifications1) => [...prevNotifications1, { id: prevNotifications1.length, message: 'Recordatorio medicamento' }]);
        }, 170000);

        return () => clearInterval(interval1);
    }, []);

    useEffect(() => {
        const interval2 = setInterval(() => {
            setAlertCitas((prevNotifications) => [...prevNotifications, { id: prevNotifications.length, message: 'Recordatorio cita' }]);
        }, 210000);

        return () => clearInterval(interval2);
    }, []);

    const handleReadMedicamentos = () => {
        setAlertMedicamentos([]);
        setOpenMedicamentos(false);
    };

    const handleReadCitas = () => {
        setAlertCitas([]);
        setOpenCitas(false);
    };

    const displayNotificationMedicamentos = (notification1) => (
        <div key={notification1.id} className="notification">
            {notification1.message}
        </div>
    );
    const displayNotificationCitas = (notification2) => (
        <div key={notification2.id} className="notification">
            {notification2.message}
        </div>
    );
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
                    <Link to="/eventos" className="navbar-item">
                        <FaCalendarAlt className="icon" />
                        <span>Eventos</span>
                    </Link>
                </nav>
                <div className="navbar_push">
                    <div className="icons_push">
                        <div onClick={() => setOpenMedicamentos(!openMedicamentos)}>
                            <FaPills className="ic_push" alt="" />
                            {
                                medicamentos.length >0 &&
                                    <div className="counter_Medicamento">{medicamentos.length}</div>
                            }                        
                            {openMedicamentos && (
                            <div className="notifications_push">
                            {medicamentos.map((n) => displayNotificationMedicamentos(n))}
                                <button className="nButton_push" onClick={handleReadMedicamentos}>
                                    Eliminar
                                </button>
                                </div>
                            )}
                        </div>
                        <div className="icon_push" onClick={() => setOpenCitas(!openCitas)}>
                            <FaRegClock className="ic_push" alt="" /> 
                            {
                                citas.length >0 &&
                                    <div className="counter_Cita">{citas.length}</div>
                            }  
                            {openCitas && (
                                <div className="notifications_push">
                                {citas.map((n) => displayNotificationCitas(n))}
                                <button className="nButton_push" onClick={handleReadCitas}>
                                    Vaciar
                                </button>
                                </div>
                            )} 
                            {
                                (medicamentos.length > 0 || citas.length > 0) &&
                                <div>
                                    <ToastContainer />
                                </div>                                
                            }    
                                                                       
                        </div>
                    </div>
                                        
                </div>
                <Link to="/" className="navbar-item logout-button" onClick={handleLogout}>
                    <FaSignOutAlt className="icon" />
                    <span>Salir</span>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
