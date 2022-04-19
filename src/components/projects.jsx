import React from 'react';

// image and file imports
import weathercalculator from './assets/img/weather_calculator.png'
import westernu from './assets/img/westernu.png'
import intelliview from './assets/img/intelliview.png'
import postwize from './assets/img/postwize.png'

// projects section
const projects = () => {
  return (
    <div className='reveal projects-header'>
        <h2>Projects I've Built</h2>

<div className="projects">

  <div>
    <div className="container reveal">

      <div className='image'><img src={weathercalculator} alt="Weather calculator"></img></div>
      <div className='text'>
        <h3>01. Weather Calculator</h3>
        <b>Python</b><b>Terminal based</b>
        <p>Made with Python, Weather Calculator is a program that computes the windchill and humidex based on temperature and dewpoint data. The program returns comfort rating and exposure risk depending on the weather. Uses iteration loops, conditional statements and Boolean logic.</p>
        <span>Command line program 


        <a class='external' target="_blank" rel="noopener noreferrer" alt='Live demo'
        href="https://aoyewol2.notion.site/Console-Based-Projects-2b1d0d3fd84e441595f00db72fbd73d8">
        <i class='bx bx-link-external'></i></a>
        </span> 
      </div>
  
    </div>

    <div className="container reveal">
      <div className='image'><img src={postwize} alt="Western University information site"></img></div>
      <div className='text'>
        <h3>02. PostWize</h3>
        <b>Bootstrap</b><b>Netlify</b>
        <p>PostWize is designed to streamline the job application process by storing all your career resources in one site! Users can see their pending applications on job sites, chat and schedule meetings with recruiters, and track important dates and deadlines with a personalized calendar.</p> 
        <span>🏆 Best Web Development Track 
          <a class='external' target="_blank" rel="noopener noreferrer" href="https://github.com/aoyewol2/PostWize"><i class='bx bxl-github'></i></a>

          <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/postwize"><i class='bx bx-link-external'></i></a>
        </span>
      </div>
    </div>

    <div className="container reveal">
      <div className='image'><img src={intelliview} alt="Intelliview"></img></div>
      <div className='text'>
        <h3>03. Intelliview</h3>
        <b>React</b><b>HTML/CSS</b>
        <p>Intelliview is a platform that stores job applications, past interviews, and advice for students to prepare for future interviews at their dream company. SheHacks+ 6 was my first hackathon, so I had to learn new skills along the way. The hackathon exposed me to front-end dev!</p> 
        <span>🏆 2nd Overall, Best Use of Google Cloud 
          <a class='external' target="_blank" rel="noopener noreferrer" href="https://github.com/rahmagillan/shehacks"><i class='bx bxl-github'></i></a>       
          <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/intelliview"><i class='bx bx-link-external'></i></a>
        </span>

      </div>
    </div>

    <div className="container reveal">
      <div className='image'><img src={westernu} alt="Western University information site"></img></div>
      <div className='text'>
        <h3>04. Learn About Western University</h3>
        <b>HTML/CSS</b><b>JavaScript</b>
        <p>A web development assignment developed for CS1033 utilizing HTML, CSS and JavaScript! The site has a responsive and dynamic design which showcases Western University's campus, residences and history.</p> 
        <span>Web development project 
          <a class='external' target="_blank" rel="noopener noreferrer" href="https://github.com/aoyewol2/learn-about-westernu"><i class='bx bxl-github'></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://aoyewol2.github.io/learn-about-westernu/"><i class='bx bx-link-external'></i></a>
        </span>
      </div>
    </div>
  </div>

  <span className='reveal github'><a a target="_blank" rel="noopener noreferrer" href="https://github.com/aoyewol2">View more</a></span>

</div>

    </div>
  )
}

export default projects