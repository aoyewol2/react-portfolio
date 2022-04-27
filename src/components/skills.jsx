import React from 'react';
import skills2 from './assets/img/skills.png';

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
      {/*<ul>
        <li>Wireframing</li>
        <li>Prototyping</li>
        <li>Database</li>
        <li>UML diagrams</li>
        <li>Web development</li>
        <li>UI/UX design</li>
        <li>Data science</li>
      </ul>
      */}
      <br id="projects"></br>
    </div>
  )
}

export default skills