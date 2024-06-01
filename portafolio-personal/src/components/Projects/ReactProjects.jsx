// src/components/Projects/GeneralProjects.jsx
import React from 'react';
import './ReactProjects.css';
import Blog1 from '../../assets/blog1.png';
import Blog2 from '../../assets/blog2.png';
import powerBi from '../../assets/powerBi.png';
import MK from '../../assets/MK.jpg';

const projects = [
  {
    title: 'Blog de mujeres en el fútbol',
    description: 'Este es un proyecto desarrollado con React, público para todos. Muestra la capacidad de las mujeres en el mundo del deporte.',
    image: Blog1, 
    link: 'https://tiburoncin.lat/22596/react-blog/' 
  },
  {
    title: 'Plataforma de Ecommerce MK',
    description: 'Este proyecto desarrolla una solución de software integral diseñada para una empresa líder en serigrafía y publicidad. Desarrollado en equipo.',
    image: MK,
    link: 'https://github.com/Diegoval-Dev/MK-Publicidad'
  },
  {
    title: 'Blog de mujeres en el fútbol - Admin',
    description: 'Este es un proyecto desarrollado con Node.js y React. Requiere de una autenticación para poder ingresar a las funcionalidades del API.',
    image: Blog2,
    link: 'https://stately-paprenjak-3d3ded.netlify.app/login'
  },
  {
    title: 'Tablero de Estadísticas Power BI ',
    description: 'Este es un tablero para poder visualizar las estadísticas recolectadas en el datamart de Northwind.',
    image: powerBi,
    link: 'https://app.powerbi.com/reportEmbed?reportId=63693d0a-f138-444f-b65c-b49af0054d38&autoAuth=true&ctid=73c3e337-a317-4624-bb03-047663c4d9ed'
  }
  
];

const ReactProjects = () => (
  <div className="general-projects-container">
    <h2>Proyectos Generales</h2>
    {projects.map((project, index) => (
      <div key={index} className="project-item">
        <h3>{project.title}</h3>
        <p className="description">{project.description}</p>
        <br></br>
        {project.link ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} className="project-image" />
          </a>
        ) : (
          <img src={project.image} alt={project.title} className="project-image" />
        )}
      </div>
    ))}
  </div>
);

export default ReactProjects;
