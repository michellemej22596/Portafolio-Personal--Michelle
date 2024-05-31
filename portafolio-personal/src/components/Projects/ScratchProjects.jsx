// src/components/Projects/ScratchProjects.jsx
import React from 'react';
import './ScratchProjects.css';

const ScratchProjects = () => (
  <div className="projects-container">
    <h2 className="projects-title">Proyectos de Scratch</h2>
    <iframe 
      src="https://scratch.mit.edu/projects/1020585103/embed" 
      className="project-frame"
      title="Proyecto de Scratch"
    ></iframe>
  </div>
);

export default ScratchProjects;
