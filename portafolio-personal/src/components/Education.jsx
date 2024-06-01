// src/components/EducationAndAchievements.jsx
import React from 'react';
import './Education.css';

const educationData = [
  {
    institution: 'Universidad del Valle de Guatemala',
    startDate: '2022',
    endDate: 'Actualidad',
    degree: 'Ingeniería en Ciencias de la Computación y Tecnologías de la Información',
  },
  {
    institution: 'INTECAP',
    startDate: 'Jun 2023',
    endDate: 'Jul 2023',
    degree: 'Javascript Essentials (E-Learning)',
  },
  {
    institution: 'INTECAP',
    startDate: 'Jul 2022',
    endDate: 'Oct 2022',
    degree: 'Lenguaje de Programación PHP y Conexión a Bases de Datos',
  },
  {
    institution: 'Colegio de Señoritas El Sagrado Corazón Naranjo',
    startDate: '2017',
    endDate: '2021',
    degree: 'Bachillerato en Ciencias y Letras con Orientación en Computación',
  },
  {
    institution: 'INTECAP',
    startDate: 'Jun 2020',
    endDate: 'Jul 2020',
    degree: 'Microsoft Excel Avanzado (E-learning)',
  }
];

const achievementsData = [
  {
    name: 'Beca Fundación Juan Bautista Gutiérrez',
    year: 2022,
  },
  {
    name: 'Distinción Honor al Mérito Académico',
    year: 2022,
  },
  {
    name: 'Nombramiento Estudiante Distinguida',
    year: 2023,
  },
  {
    name: 'Miembro de la Junta Directiva IEEE ',
    year: 2024,
  },
  {
    name: 'Participación en el Curso "Mujeres en Ingeniería"',
    year: 2021,
  },
  {
    name: 'Logros en competencias de fútbol femenil',
    year: 2024, 
  },
];

const Education = () => (
  <div className="education-achievements-container">
    <h2>Educación</h2>
    <div className="education-section">
      {educationData.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="education-institution">
            {edu.institution}
          </div>
          <div className="education-dates">
            {edu.startDate} - {edu.endDate}
          </div>
          <div className="education-degree">
            {edu.degree}
          </div>
        </div>
      ))}
    </div>
    <h2>Logros</h2>
    <div className="achievements-section">
      {achievementsData.map((achievement, index) => (
        <div key={index} className="achievement-item">
          {achievement.name} ({achievement.year})
        </div>
      ))}
    </div>
  </div>
);

export default Education;
