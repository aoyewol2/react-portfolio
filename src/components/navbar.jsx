import React from 'react';
import logo from './assets/img/logov2.png'

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

// navbar section -- fixed on page
const navbar = () => {
  return (
    <div>
      <div>
      <a href = '#home'><img src={logo} style={logoStyles} class='logo reveal-opacity'></img></a>
        
      </div>

      <div className="navbar reveal-nav">
          <a href="#home"><span>01.</span>Home</a>
          <a href="#skills"><span>02.</span>Skills</a>
          <a href="#projects"><span>03.</span>Projects</a>
          <a href="#contact"><span>04.</span>Contact</a>
        </div>
    </div>
  )
}

export default navbar