import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import ReactProjects from './components/Projects/ReactProjects';
import ScratchProjects from './components/Projects/ScratchProjects';
import Experience from './components/Experience';
import About from './components/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-projects" element={<ReactProjects />} />
        <Route path="/scratch-projects" element={<ScratchProjects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;