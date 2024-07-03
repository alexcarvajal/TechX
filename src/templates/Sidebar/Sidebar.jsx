import React, { useState, useEffect } from 'react';
import "./card.css";
import './Sidebar.css';
import Logo from '../../assets/LogoHospital.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaUsers, FaCalendarAlt, FaSignOutAlt, FaHeartbeat, FaRegClock, FaPills } from 'react-icons/fa'; // FaHeartbeat eliminado ya que no se utiliza
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../../firebaseConfig';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import emailjs from 'emailjs-com'

function Sidebar() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        console.log('Cerrando sesión...');
        navigate('/');
    };

    function enviarEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_vqqq2og', 'template_hmlf1w9', e.target, 'JlU2lgM-jzn3dCHcJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };
    //form onsubmit={enviarEmail}


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
       
    const [msjMedicamento, setMsjMedicamento] = useState(null);
    useEffect(() => {
        const docRefMedicamento = doc(db, 'powerbitoken', 'token');    
        const unsubscribe = onSnapshot(docRefMedicamento, (docSnapMedicamento) => {
          if (docSnapMedicamento.exists()) {
            const data_msjMedicamento = docSnapMedicamento.data();
            setMsjMedicamento(data_msjMedicamento.msjMedicamento);
          } else {
            console.log('No such document!');
          }
        }, (error) => {
          console.error('Error getting document:', error);
        });
        return () => unsubscribe();
      }, []);

    useEffect(() => {
            setAlertMedicamentos((prevNotifications) => [
                ...prevNotifications, 
                { id: prevNotifications.length, message: msjMedicamento }
            ]);
    }, [msjMedicamento]);

    // useEffect(() => {
    //     const interval1= setInterval(() => {
    //         setAlertMedicamentos((prevNotifications1) => [...prevNotifications1, { id: prevNotifications1.length, message: msjMedicamento }]);
    //         console.log(msjMedicamento);
    //     }, 57000);

    //     return () => clearInterval(interval1);
    // }, [msjMedicamento]);

    const [msjCita, setMsjCita] = useState(null);
    useEffect(() => {
        const docRefCita = doc(db, 'powerbitoken', 'token');    
        const unsubscribe = onSnapshot(docRefCita, (docSnapCita) => {
          if (docSnapCita.exists()) {
            const data_msjCita = docSnapCita.data();
            setMsjCita(data_msjCita.msjCita);
          } else {
            console.log('No such document!');
          }
        }, (error) => {
          console.error('Error getting document:', error);
        });
        return () => unsubscribe();
      }, []);

    useEffect(() => {
            setAlertCitas((prevNotifications) => [
                ...prevNotifications, 
                { id: prevNotifications.length, message: msjCita }
            ]);
    }, [msjCita]); 


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
