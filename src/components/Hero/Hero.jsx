import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <div className="hero">
        <div className="hero-main">
          <div className="hero-content">
            <h1>Find & Search Your <span>Favourite</span> Doctor</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspend ultrices gravida.</p>
            <button>Get Appointment</button>
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