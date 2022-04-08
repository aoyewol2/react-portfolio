import React from 'react';

// image and file imports
import weathercalculator from './assets/img/weather_calculator.png'
import westernu from './assets/img/westernu.png'
import intelliview from './assets/img/intelliview.png'

// projects section
const projects = () => {
  return (
    <div className='reveal projects-header'>
        <h2>Projects</h2>

<div className="projects">

  <div>
    <div className="container reveal">

      <div className='image'><img src={weathercalculator} alt="Weather calculator"></img></div>
      <div className='text'>
        <h3>01. Weather Calculator</h3>
        <b>2022</b><b>Technical</b><b>Python</b>
        <p>Made with Python, Weather Calculator is a program that computes the windchill and humidex based on temperature and dewpoint data. The program returns comfort rating and exposure risk depending on the weather. Uses iteration loops, conditional statements and Boolean logic.</p>
        <span>School project <a target="_blank"
        rel="noopener noreferrer"
        href="https://aoyewol2.notion.site/Console-Based-Projects-2b1d0d3fd84e441595f00db72fbd73d8">
        (Try it out)</a></span> 
      </div>
  
    </div>

    <div className="container reveal">
      <div className='image'><img src={westernu} alt="Western University information site"></img></div>
      <div className='text'>
        <h3>02. Learn About Western University</h3>
        <b>2022</b><b>Technical</b><b>Web dev</b>
        <p>A web development assignment developed for CS1033 utilizing HTML, CSS and JavaScript! The site has a responsive and dynamic design which showcases Western University's campus, residences and history.</p> 
        <span>School project <a target="_blank" rel="noopener noreferrer" href="https://aoyewol2.github.io/learn-about-westernu/">(Try it out)</a></span>
      </div>
    </div>

    <div className="container reveal">
      <div className='image'><img src={intelliview} alt="Intelliview"></img></div>
      <div className='text'>
        <h3>03. Intelliview</h3>
        <b>2022</b><b>Technical</b><b>Hackathon</b>
        <p>Intelliview is a platform that stores job applications, past interviews, and advice for students to prepare for future interviews at their dream company. SheHacks+ 6 was my first hackathon, so I had to learn new skills along the way. The hackathon exposed me to front-end dev!</p> 
        <span>🏆 2nd Overall & Best Use of Google Cloud <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/intelliview">(Try it out)</a></span>

      </div>
    </div>
  </div>
  <span className='reveal github'>View more on my <a a target="_blank" rel="noopener noreferrer" href="https://github.com/aoyewol2">Github</a>!</span>
</div>

    </div>
  )
}

export default projects