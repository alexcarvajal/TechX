import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-main">
        <div className="hero-content">
          <h1>Encuentra <span>El Mejor Doctor </span> Especializado</h1>
          <p>Programa tu cita y configura recordatorios para tus medicamentos</p>
          <Link to="/login" className='button-hero'>
            Agenda tu cita aqui!
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Hero