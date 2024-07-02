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
            <div>Llamada de Emergencia</div>
            <div>#123<br />+57123124141421</div>
          </div>
          <div className="contact-item">
            <div>Ciudad</div>
            <div>Popayán, Cauca<br />Colombia</div>
          </div>
          <div className="contact-item">
            <div>Servicio de Ambulancia</div>
            <div>+57123141414141<br />+57123141414141</div>
          </div>
        </div>
      </div>
  );
};


export default Hero