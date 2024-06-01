// src/components/Experience.jsx
import React from 'react';
import './Experience.css';

const experiences = [
  {
    startDate: 'Mayo 2024',
    endDate: 'Actualidad',
    company: 'Plataforma Kodland',
    position: 'Tutora de Programación',
    description: 'Encargada de brindar la formación del curso Scratch para niños y niñas de 8 a 12 años; supervisar sus tareas, evaluar el aprendizaje y responder consultas por medio de clases virtuales. ',
  },
  {
    startDate: 'Enero 2024',
    endDate: 'Actualidad',
    company: 'Universidad del Valle de Guatemala',
    position: 'Auxiliar de Cálculo I',
    description: 'Encargada de evaluar trabajos, calificar tareas, asistir al catedrático encargado y proporcionar atención a los estudiantes del curso. ',
  },
  {
    startDate: 'Diciembre 2023',
    endDate: 'Febrero 2024',
    company: 'Telus International - Apple Support',
    position: 'Asesor de Soporte Técnico',
    description: 'Encargada de asistir a usuarios de IOS provenientes de la región de Europa con inquietudes o problemas técnicos relacionados con productos Apple.',
  },
  {
    startDate: 'Nov - Dic 2020 & ',
    endDate: 'Oct - Dic 2021',
    company: 'Alorica LATAM - Walmart.com',
    position: 'Agente de Servicio al Cliente (Vacacionista)',
    description: 'Encargada de brindar la mejor atención y servicio a clientes de la plataforma Walmart.com (Estados Unidos). Realizaba procesos de reembolso, reposición, seguimiento de paquetería y más. ',
  },

];

const additionalExperiences = [
  {
    name: 'Luis Arana (UVG)',
    position: 'Jefe inmediato, 2024',
    phone: '4704 1234'
  },
  {
    name: 'Alejandro Rosal (Telus)',
    position: 'Supervisor, 2024',
    phone: '5122 2284'
  },

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
 <h2>Referencias Laborales</h2>
    <div className="additional-experiences">
      {additionalExperiences.map((exp, index) => (
        <div key={index} className="additional-experience-item">
          <div className="additional-experience-name">
            {exp.name}
          </div>
          <div className="additional-experience-position">
            {exp.position}
          </div>
          <div className="additional-experience-phone">
            {exp.phone}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
