import React from 'react'

const floaters = () => {

  // social media links
  const Github = () => {
    window.open("https://github.com/aoyewol2");
  };

  const Devpost = () => {
    window.open("https://devpost.com/aoyewol2");
  };

  const Linkedin = () => {
    window.open("https://www.linkedin.com/in/ashleyoyewole/");
  };

  const Email = () => {
    window.open("mailto:aoyewol2@uwo.ca");
  };

  return (
    <div className='reveal-opacity'>
        <div className="floaters">  
            <button onClick={Github}><i className='bx bxl-github'></i></button>
            <button onClick={Linkedin}><i className='bx bxl-linkedin'></i></button>
            <button onClick={Devpost}><i className='bx bxl-dev-to'></i></button>
            <button onClick={Email}><i className='bx bxl-gmail'></i></button>
        </div>
        
        <div className="version">
            <a target="_blank" rel="noopener noreferrer" href="https://aoyewol2.github.io/" title="Compare how I've improved"><span>v1.0?</span></a>
        </div>
      
    </div>
  );
}

export default floaters