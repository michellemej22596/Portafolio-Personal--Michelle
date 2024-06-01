import React from 'react';
import arrows from '../assets/arrows.png';
import profileImage from '../assets/foto1.jpg';
import FallingBalls from './FallingBalls';
import './Home.css';


const Home = () => (
  <div className="home-container" align= 'center'>
     <FallingBalls/>
    <h1>Bienvenido a Mi Portafolio</h1>
    <img src={profileImage} alt="Profile" className="profile-image" />
    <h3>¡Descubre, Explora, Conecta!</h3>
    <p className="home-description" >Hola, soy Michelle Angel de María Mejía Villela, estudiante de Ingeniería en Ciencias de la Computación y Tecnologías de la Información. Este portafolio es una ventana a mi carrera profesional y un reflejo de mi dedicación y pasión por la programación. Aquí encontrarás una selección de mis proyectos más significativos y logros.</p>
    <img src={arrows} alt="Flechas del teclado" className="home-arrows" />
    <p className="home-instructions">Te invito a navegar utilizando las flechas del teclado o swipes hacia los lados y explorar las soluciones creativas que he implementado en diversos desafíos profesionales</p> 
    <p>¡Comienza a navegar!</p>
  </div>
);
 
export default Home;
