import React from 'react';
import NavbarHome from '../NavbarHome/NavbarHome';
import Footer from '../../templates/Footer/Footer';
import { FaSearch, FaUser, FaStar, FaCog, FaMapMarkerAlt, FaComments, FaHeart, FaCalendar } from 'react-icons/fa';
import './AboutUs.css';
import Hospital from '../../assets/Hospital.jpg';

const AboutUs = () => {
  return (
    <>
      <NavbarHome />
      <div className="about-us-container">
        <h2 className="section-title">Nuestro Hospital</h2>
        <p className="section-description">
          En el Hospital Susana López de Valencia, nos dedicamos a proporcionar un seguimiento continuo y preciso a nuestros pacientes. Reconocemos la importancia de un sistema integrado y automatizado para la monitorización de la salud, especialmente para aquellos con enfermedades crónicas o necesidades médicas complejas.
        </p>
        <div className="about-us-content">
          <div className="icons-container">
            <div className="icon-item">
              <FaSearch className="icon-us" />
              <p>Implementamos soluciones tecnológicas avanzadas para la monitorización en tiempo real de la salud de nuestros pacientes, permitiendo una supervisión constante y ajustada a sus necesidades específicas.</p>
            </div>
            <div className="icon-item">
              <FaUser className="icon-us" />
              <p>Nos aseguramos de que cada paciente reciba recordatorios automáticos para la toma de medicamentos, reduciendo así el riesgo de olvido y mejorando la adherencia al tratamiento.</p>
            </div>
            <div className="icon-item">
              <FaStar className="icon-us" />
              <p>Nuestra meta es mejorar la calidad de vida de los pacientes a través de un cuidado integral y personalizado, facilitando un seguimiento proactivo y eficiente por parte de los profesionales de la salud.</p>
            </div>
            <div className="icon-item">
              <FaCog className="icon-us" />
              <p>Desarrollamos herramientas que permiten una gestión efectiva de citas y controles médicos, garantizando que cada paciente reciba la atención necesaria en el momento oportuno.</p>
            </div>
            <div className="icon-item">
              <FaMapMarkerAlt className="icon-us" />
              <p>Ofrecemos un sistema integrado que unifica la información médica, proporcionando a los profesionales de la salud una visión completa del historial y necesidades de cada paciente.</p>
            </div>
            <div className="icon-item">
              <FaComments className="icon-us" />
              <p>Fomentamos la comunicación constante entre pacientes y médicos, facilitando la resolución de dudas y el ajuste de tratamientos en tiempo real.</p>
            </div>
            <div className="icon-item">
              <FaHeart className="icon-us" />
              <p>Nos preocupamos por el bienestar emocional de nuestros pacientes, ofreciendo apoyo y recursos para enfrentar los desafíos de las enfermedades crónicas.</p>
            </div>
            <div className="icon-item">
              <FaCalendar className="icon-us" />
              <p>Planificamos y recordamos automáticamente los controles médicos periódicos, asegurando un seguimiento continuo y evitando lapsos en el cuidado de la salud.</p>
            </div>
          </div>
          <div className="image-container">
            <img src={Hospital} alt="Hospital" className="hospital-image" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
