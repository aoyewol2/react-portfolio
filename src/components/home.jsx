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

  return (

    // main div
    <div>
      <div className='top' id="home"></div>
        <div>
         <img src={thatsme} alt="That's me!" title="That's me!" className="intro reveal-delay" />
      </div>

      <div>
        <div className="slide-effect">
          <span className="wip reveal-delay">Hi, my name is</span>
        </div>
        
        <div>
          <h1 className="line-1 anim-typewriter">Ashley Oyewole</h1>
          <p className="intro reveal-text">I'm a <span className="yr">first year</span> student at Western University in London, Ontario in Canada. I plan to pursue a Bachelors in Computer Science. I'm currently at the beginner level of programming and in the process of exploring my different interests within tech. During my free time, you can find me spending time with friends or working on new projects. Currently exploring:</p>
        </div>

        <ul className="interests reveal-delay">
          <li>Full-stack development</li>
          <li>Database technologies</li>
          <li>Game asset design</li>
        </ul>
        
        <div className="reveal-delay">
          <a href="https://github.com/aoyewol2/react-portfolio"
           target="_blank"
           rel="noopener noreferrer"
           className="wip">
          <span>(This site is a work in progress!)</span></a>
        </div> 

      </div>

      <div className="interests reveal-delay">
        <a onClick={Linkedin}><button class="intro">Let's chat!</button></a> 
      </div>

      <div className="socials reveal-opacity">
        <a onClick={Github} alt="GitHub">GitHub</a>
        <a onClick={Linkedin}>LinkedIn</a>
        <a onClick={Email}>Email</a>
        <a href={resume}
        target="_blank"
        rel="noopener noreferrer">Resume</a>
      </div>

      <div>
        <i className='bx bxs-chevrons-down arrow' id="skills"></i>
      </div>

    </div>
  )
}

export default home