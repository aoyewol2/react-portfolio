import React from 'react';

// image and file imports

import thatsme from '../assets/img/thatsme.png';
import resume from '../assets/AshleyOyewole_Resume.pdf';
import circles from '../assets/img/circles.svg';

// home and about me section
const Home = props => {

  return (

    // main div
    <div className='flex'>
      <div>
        <img src={circles} alt="" className="backdrop"></img>
      </div>
      <div className='top' id="home"></div>
        <div>
          <img src={thatsme} 
          className="intro reveal-opacity-2"
          alt = "Ashley Oyewole" />
        </div>

      <div id='bg-repeat' className='reveal-delay'>

      </div>

      <div>
        <div>
          <br></br>
          <span className="hi reveal-opacity">Hi there, I'm Ashley</span>
        </div>

        <div className='reveal-opacity'>
          <h1>A software developer with a passion for <u>UI</u> and building <u>products</u> and systems users can interact with</h1>
        </div>
      </div>
      <div className='resume reveal-opacity'>
        <span><a href={resume}target="_blank"
        rel="noopener noreferrer"><i>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg> Download resume</i></a></span>
      </div>
      <br id="about"></br>

    </div>
  )
}

export default Home