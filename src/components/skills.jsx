import React from 'react';
import skills2 from './assets/img/skills.svg';

// skills section

const skills = () => {
  return (
    <div className="skills">
    <br></br>
      <div>
        <h2 className='reveal'>Skills</h2>
        <p className='tag reveal'>The skills, tools and technologies I use to design and develop my projects.</p>
        <br></br><br></br><br></br>
      </div>
      <div className="reveal">
        <img src={skills2} className='skillset'></img>
      </div>
      <ul className='mobile-skills'>
        <li className='reveal'>HTML/CSS</li>
        <li className='reveal'>JavaScript</li>
        <li className='reveal'>Python</li>
        <li className='reveal'>React</li>
        <li className='reveal'>Git, GitHub</li>
        <li className='reveal'>Sass</li>
        <li className='reveal'>Figma, Adobe XD</li>
        <li className='reveal'>npm</li>
      </ul>
      
      <br id="projects"></br>
    </div>
  )
}

export default skills