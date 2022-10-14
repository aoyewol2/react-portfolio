import React from 'react';
import Term from './animations/scrolltotop.jsx';


let logoStyles = {
  width: '100px',
  position: 'fixed',
  left: '0',
  top: '0',
  zIndex : '10',
  userSelect :'none',
  paddingLeft: '20px',
  marginTop : '-10px',
  
  visibility : 'hidden'
}

// inline button styles (unused)
let buttonStyles = {
  border: '1px solid #8dc4e9',
  borderRadius: '6px',
  padding: '0.75rem 1rem',

  '&hover': {
    backgroundColor: 'red'
  } 
};

// navbar section -- fixed on page
const navbar = () => {
  return (
    <div className='reveal-opacity'>
      <Term/>

      <div className="navbar reveal-nav">
          <a href="#about"><span>01.</span>About</a>
          <a href="#skills"><span>02.</span>Skills</a>
          <a href="#projects"><span>03.</span>Projects</a>
          <a href="#contact"><span>04.</span>Contact</a>
        </div>
    </div>
  )
}

export default navbar