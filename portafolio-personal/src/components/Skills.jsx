// src/components/About.jsx
import Stack from '../assets/stack.png';
import React from 'react';
import './About.css';

const skills = [
  { name: 'Habilidad Mecanográfica', level: 95 },
  { name: 'Trabajo en equipo', level: 80 },
  { name: 'Idioma Inglés', level: 95 },
  { name: 'Microsoft Office', level: 87 },
  { name: 'Photoshop', level: 50 },
  { name: 'JavaScript', level: 75 },
  { name: 'CSS', level: 85 },
  { name: 'HTML', level: 90 },
  { name: 'Python', level: 80 },
  { name: 'Java', level: 60 },
  { name: 'SQL', level: 90 },
  { name: 'PHP', level: 80 }
];

const Skills = () => (
  <div className="about-container">
    <div className="skills">
    <h2 >Habilidades</h2>
    <img src={Stack} alt="Stack" className="stack-image"/>
    <p className="description">Estos son algunos de mis conociminetos más destacables que he aprendido a lo largo de mi carrera universitaria y experiencias laborales.</p>
    <br></br>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <span className="skill-name">{skill.name}</span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
      <br></br>
      <p>¡Estoy dispuesta a continuar aprendiendo mucho más!</p>
    </div>
  </div>
);

export default Skills;