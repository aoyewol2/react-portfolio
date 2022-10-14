import React from 'react';

// image and file imports

import thatsme from './assets/img/thatsme.png';
import resume from './assets/AshleyOyewole_Resume.pdf';
import circles from './assets/img/circles.svg';

// home and about me section
const home = () => {

  // social media links
  const Github = () => {
    window.open("https://github.com/aoyewol2");
  };

  const Linkedin = () => {
    window.open("https://www.linkedin.com/in/aoyewol2/");
  };

  const Devpost = () => {
    window.open("https://devpost.com/aoyewol2");
  };

  const Email = () => {
    window.open("mailto:aoyewol2@uwo.ca");
  };

  // link styles

  let linkStyles1 = {
    animation: 'opacity 1s'
    };

  let linkStyles2 = {
    animation: 'opacity 3s'
    };

  let linkStyles3 = {
    animation: 'opacity 4s'
    };

  let linkStyles4 = {
    animation: 'opacity 5s'
    };

  const Tag = {
    color: '#8dc4e9',
    fontWeight: 'normal',
    transitionDuration: '0.3s'
  }

  return (

    // main div
    <div className='flex'>
      <div>
        <img src={circles} alt="" className="backdrop"></img>
      </div>
      <div className='top' id="home"></div>
        <div>
          <img src={thatsme} 
          className="intro reveal-delay"
          alt = "Ashley Oyewole" />
        </div>

      <div id='bg-repeat' className='reveal-delay'>

      </div>

      {/* introduction section */}
      <div>
        <div className="slide-effect">
          <span className="wip reveal-nav">Hi, my name is</span>
        </div>
        
        <div>
          <h1 className="line-1 anim-typewriter">Ashley Oyewole</h1>
          <p className="intro reveal-text main">I am a <strong style={Tag}>Frontend Developer </strong> with a passion for UI and software design. Currently in my second year of studying Computer Science at Western University in London, Ontario. Open to Summer 2023 opportunities!</p>
          
          <p className="intro reveal-text">A few things I've been working on recently:</p>
        </div>

        <ul className="interests reveal-delay">
          <li>UI development</li>
          <li>Wireframing and protoyping</li>
          <li>Database technologies</li>
          <li>React.js and JavaScript</li>
        </ul>

      </div>

      {/* social media section */}
      <div className="interests reveal-delay">
        <a onClick={Email}><button className="intro">Say hello</button></a> 
      </div>

      <div></div>

      <div className="socials">
        <a onClick={Github} alt="GitHub" className="reveal-opacity" style={linkStyles1} >GitHub</a>

        <a onClick={Linkedin} className="reveal-opacity" style={linkStyles2}>LinkedIn</a>

        <a onClick={Devpost} className="reveal-opacity" style={linkStyles3}>Devpost</a>

        <a href={resume}
        target="_blank"
        rel="noopener noreferrer" className="reveal-opacity" style={linkStyles4}>Resume</a>

      </div>
      <br id="about"></br>
    </div>
  )
}

export default home