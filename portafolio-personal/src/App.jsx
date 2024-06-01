// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import Navbar from './components/NavBar';
import Home from './components/Home';
import ReactProjects from './components/Projects/ReactProjects';
import ScratchProjects from './components/Projects/ScratchProjects';
import Experience from './components/Experience';
import About from './components/About';
import './index.css';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        navigateNext();
      } else if (event.key === 'ArrowLeft') {
        navigatePrevious();
      }
    };

    const navigateNext = () => {
      const paths = ['/',   '/about', '/experience',  '/scratch-projects', '/react-projects'];
      const currentIndex = paths.indexOf(window.location.pathname);
      const nextIndex = (currentIndex + 1) % paths.length;
      navigate(paths[nextIndex]);
    };

    const navigatePrevious = () => {
      const paths = ['/',   '/about', '/experience',  '/scratch-projects', '/react-projects'];
      const currentIndex = paths.indexOf(window.location.pathname);
      const previousIndex = (currentIndex - 1 + paths.length) % paths.length;
      navigate(paths[previousIndex]);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  const handlers = useSwipeable({
    onSwipedLeft: () => navigatePrevious(),
    onSwipedRight: () => navigateNext(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/scratch-projects" element={<ScratchProjects />} />
        <Route path="/react-projects" element={<ReactProjects />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
