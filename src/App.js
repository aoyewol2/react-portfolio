import React from 'react';

// components

import Navbar from './components/Navbar';
import Floaters from './components/Floater';
import Home from './components/Hero'; 
import Experience from "./components/Experience";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


// transitions

import './animations/Animation';
import './animations/scrollToTop';
import Cursor from "./animations/Cursor";

// css file imports

import './styles/App.css';
import './styles/Selectors.css';
import './styles/Query.css';
import './styles/Keyframes.css';
import './styles/Root.css';

// main app

const App = () => {

  return (
    <>
      <Navbar/>
      <Home/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Floaters/>
      <Cursor/>
    </>
  );
}

export default App;