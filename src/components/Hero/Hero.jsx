import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <div className="hero">
        <div className="hero-main">
          <div className="hero-content">
            <h1>Encuentra <span>Tu Doctor </span> Favorito</h1>
            <p>Programa tu cita y configura recordatorios para tus medicamentos</p>
            <button>Agenda tu cita aqui!</button>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <div>Emergency Call</div>
            <div>+0923410849252<br />+0923410849252</div>
          </div>
          <div className="contact-item">
            <div>Location</div>
            <div>Model Town, Central Falat Lahore<br />Pakistan</div>
          </div>
          <div className="contact-item">
            <div>Ambulance</div>
            <div>+0923410849252<br />+0923410849252</div>
          </div>
        </div>
      </div>
  );
};


export default Hero