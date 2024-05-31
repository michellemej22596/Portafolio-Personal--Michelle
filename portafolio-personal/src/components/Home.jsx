// src/components/Home.jsx
import React from 'react';
import arrows from '../assets/arrows.png';

const Home = () => (
  <div className="home-container" align= 'center'>
    <h1>Bienvenido a Mi Portafolio</h1>
    <p className="home-description">Este es un proyecto personal con el fin de darme a conocer.</p>
    <p className="home-instructions">Puedes navegar por el portafolio con las flechas del teclado.</p>
    <img src={arrows} alt="Flechas del teclado" className="home-arrows" />
    <p>¡Comienza a navegar!</p>
  </div>
);

export default Home;
