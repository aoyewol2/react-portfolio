import React from 'react';

// page imports

import Navbar from './components/navbar';
import Floaters from './components/floaters';

import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';


// component transitions

import './components/animations/animation';
import './components/animations/scrolltotop';

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
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
      <Floaters />
    </>
  )
}

export default App;