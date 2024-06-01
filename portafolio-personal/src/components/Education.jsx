// src/components/About.jsx
import React from 'react';
import profileImage from '../assets/foto2.jpg';
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import './About.css';

const Education = () => (
  <div className="about-container">
    <h2>Sobre Mí</h2>
    <img src={profileImage} alt="Profile" className="profile-image"/>
    <p className="description">Amabilidad, responsabilidad, honestidad, perseverancia, lealtad, generosidad, altruismo y multitasking. Me encanta interactuar con otras personas y ayudarlos en cualquier ámbito. Disfruto aprender nuevas cosas y conocer nuevos lugares. Soy extremadamente eficiente en resolver problemas y pensar en soluciones divergentes.</p>
    <div className="social-links">
      <a href="https://www.linkedin.com/in/michelle-mejía-villela-988a3b22b" target="_blank" rel="noopener noreferrer">
        <img src={linkedinLogo} alt="LinkedIn" className="social-logo"/>
        LinkedIn
      </a>
      <a href="https://github.com/michellemej22596" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub" className="social-logo"/>
        GitHub
      </a>
    </div>
  </div>
);

export default Education;
