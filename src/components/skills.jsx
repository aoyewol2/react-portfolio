import React from 'react';
import skills2 from './assets/img/skills.svg';

// skills section

const skills = () => {
  return (
    <div className="skills">
    <br></br>
      <div>
        <h2 className='reveal'>Tools I Build With</h2>
        <p className='tag reveal'>The tools and technologies I use to design and develop my projects.</p>
        <br></br><br></br><br></br>
      </div>
      <div className="reveal">
        <img alt='' src={skills2} className='skillset'></img>
      </div>
      
      <div style={{paddingBottom: '40px'}}></div>
      <br id="projects"></br>

      
    </div>
  )
}

export default skills