// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="contact-info">
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
    </footer>
  );
};

export default Footer;
