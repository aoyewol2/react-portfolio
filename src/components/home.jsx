import React from 'react';

// image and file imports
import thatsme from './assets/img/thatsme.png';
import resume from './assets/Ashley_Oyewole_Resume_2022.pdf';

// home and about me section
const home = () => {

  // social media links
  const Github = () => {
    window.open("https://github.com/aoyewol2");
  };

  const Linkedin = () => {
    window.open("https://www.linkedin.com/in/ashleyoyewole/");
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

  return (

    // main div
    <div>
      <div className='top' id="home"></div>
        <div>
         <img src={thatsme} alt="That's me!" title="That's me!" className="intro reveal-delay" />
      </div>

      {/* introduction section */}
      <div>
        <div className="slide-effect">
          <span className="wip reveal-nav">Hi, my name is</span>
        </div>
        
        <div className='main'>
          <h1 className="line-1 anim-typewriter">Ashley Oyewole</h1>
          <p className="intro reveal-text">I'm a first year student at Western University in London, Ontario in Canada. I plan to pursue a Bachelors in Computer Science. I'm currently at the beginner level of programming and in the process of exploring my different interests within tech. During my free time, you can find me spending time with friends or working on new projects. Currently exploring:</p>
        </div>

        <ul className="interests reveal-delay">
          <li>Full-stack development</li>
          <li>Database technologies</li>
          <li>CSS Frameworks</li>
        </ul>

      </div>

      {/* social media section */}
      <div className="interests reveal-delay">
        <a onClick={Linkedin}><button class="intro">Let's chat!</button></a> 
      </div>

      <div id="skills"></div>

      <div className="socials">
        <a onClick={Github} alt="GitHub" className="reveal-opacity" style={linkStyles1} >GitHub</a>

        <a onClick={Linkedin} className="reveal-opacity" style={linkStyles2}>LinkedIn</a>

        <a onClick={Email} className="reveal-opacity" style={linkStyles3}>Email</a>

        <a href={resume}
        target="_blank"
        rel="noopener noreferrer" className="reveal-opacity" style={linkStyles4} >Resume</a>

      </div>

    </div>
  )
}

export default home