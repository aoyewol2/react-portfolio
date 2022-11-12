import React from 'react';
import circles from '../assets/img/circles.svg';

// contact section and footer
const contact = () => {

  return (
    <div style={{position: 'relative'}}>
      <div>
        <img src={circles} alt="" className="backdrop-2"></img>
      </div>
        <div id="contact" className ="contact">
            <h4>Thanks for stopping by!</h4>
            
            <p>I'm currently seeking <u className='pos'>UI/Frontend Engineering Intern</u> positions for Summer 2023. Let's connect!</p>
            <p>© Ashley Oyewole 2022. All rights reserved.</p>
            <div className='email'>
              <a id="text" href="mailto:aoyewol2@uwo.ca">aoyewol2@uwo.ca</a>
            </div>
            <div style={{paddingBottom: '5vh'}}></div>  
        </div>

      <div className="footer">

        <div style={{}}>
          <a href="https://github.com/aoyewol2/react-portfolio"
           target="_blank"
           rel="noopener noreferrer" style={{textDecoration: 'none'}}>
          <span>
            <svg className='react' xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" stroke-width="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg> Designed & Built by Ashley Oyewole</span></a>
        </div> 
      </div>
    </div>
  );
}

export default contact