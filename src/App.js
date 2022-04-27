import React from 'react';
import styled from "styled-components";

// page imports

import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import Floaters from './components/floaters.jsx';

// component transitions

import './components/animations/animation.jsx';
import './components/animations/scrolltotop.jsx'

// css file imports

import './styles/App.css';
import './styles/selectors.css';
import './styles/query.css';
import './styles/keyframes.css';
import './styles/root.css';

// main app

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Floaters />
    </>
  )
}

export default App