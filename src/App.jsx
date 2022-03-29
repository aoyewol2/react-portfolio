import React from 'react'

// page imports

import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import Floaters from './components/floaters.jsx';

// component transitions
import './components/animation.jsx';

// css file imports

import './css/App.css';
import './css/selectors.css';
import './css/query.css';
import './css/keyframes.css';
import './css/root.css';

// main app

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects/>
      <Contact />
      <Floaters />
    </>
  )
}

export default App