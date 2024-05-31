// src/components/Experience.jsx
import React from 'react';
import './Experience.css';

const experiences = [
  {
    startDate: 'Enero 2020',
    endDate: 'Diciembre 2021',
    company: 'Empresa A',
    position: 'Desarrollador Frontend',
    description: 'Desarrollé aplicaciones web utilizando React y Redux. Implementé interfaces de usuario accesibles y responsivas.',
  },
  {
    startDate: 'Marzo 2018',
    endDate: 'Diciembre 2019',
    company: 'Empresa B',
    position: 'Desarrollador Backend',
    description: 'Trabajé en el desarrollo de APIs RESTful utilizando Node.js y Express. Mejoré el rendimiento de la base de datos.',
  },
  // Añade más experiencias según sea necesario
];

const Experience = () => (
  <div className="experience-container">
    <h2>Experiencia Laboral</h2>
    {experiences.map((exp, index) => (
      <div key={index} className="experience-item">
        <div className="experience-dates">
          {exp.startDate} - {exp.endDate}
        </div>
        <div className="experience-company">
          {exp.company}
        </div>
        <div className="experience-position">
          {exp.position}
        </div>
        <div className="experience-description">
          {exp.description}
        </div>
      </div>
    ))}
  </div>
);

export default Experience;
