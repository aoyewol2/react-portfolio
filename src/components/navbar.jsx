import React from 'react';
import Term from './animations/scrolltotop.jsx';

// navbar section -- fixed on page
const navbar = () => {
  return (
    <div className='reveal-opacity'>
      <Term/>

      <div className="navbar reveal-opacity">
          {/* <a href="#about">About</a>
          <a href="#skills">Skills</a> */}
          {/* <a href="#projects">Projects</a> */}
          <a href="#contact">Contact</a>
        </div>
    </div>
  )
}

export default navbar