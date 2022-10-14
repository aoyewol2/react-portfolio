import React from 'react';

// image and file imports
import weathercalculator from './assets/img/weather_calculator.png'
//import westernu from './assets/img/westernu.png'
import intelliview from './assets/img/intelliview.png'
import postwize from './assets/img/postwize.png'
import typeconverter from './assets/img/typeconverter.png'

// projects section
const projects = () => {
  return (
    <div className='reveal projects-header'>
        <h2>Projects I've Built</h2>
        <p className='tag reveal'>A few of my most recent personal, school and hackathon projects.</p>
        <br></br>

  <div className="projects">

  <div>

    <div className="container reveal">
      <div className='image'><img src={typeconverter} alt="Western University information site"></img></div>
      <div className='text'>
        <h3>Type Converter</h3>
        <b>C Language</b><b>Terminal-based</b>
        <p>Programmed in C, Type Converter computes unit conversion based on user input. The program accepts conversions for pounds, kilograms, acres, hectares, litres, etc. Catches type mismatches and errors using functions, iteration loops and conditional statemets. </p> 
        <span>✨ Command line program
        <a class='external' target="_blank" rel="noopener noreferrer" alt='Live demo'
        href="https://github.com/aoyewol2/type-converter">
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        </i></a>
        </span> 
      </div>
    </div>

    <div className="container reveal">
      <div className='image'><img src={postwize} alt="Postwize"></img></div>
      <div className='text'>

        <h3>PostWize</h3>

        <b>Bootstrap</b><b>Netlify</b>

        <p>PostWize is designed to streamline the job application process by storing all your career resources in one site! Users can see their pending applications on job sites, chat and schedule meetings with recruiters, and track important dates with a personalized calendar.</p> 

        <span>🏆 Best Web Development Track 
          <a class='external' target="_blank" rel="noopener noreferrer" href="https://github.com/aoyewol2/PostWize"><i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </i></a>

          <a target="_blank" rel="noopener noreferrer" href="https://post-wize.netlify.app"><i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          </i></a>
        </span>
      </div>
    </div>


    <div className="container reveal">

      <div className='image'><img src={weathercalculator} alt="Weather calculator"></img></div>
      <div className='text'>
        <h3>Weather Calculator</h3>

        <b>Python</b><b>Terminal-based</b>

        <p>Made with Python, Weather Calculator is a program that computes the windchill and humidex based on temperature and dewpoint data. The program returns comfort rating and exposure risk depending on the weather. Uses iteration loops and conditional statements.</p>
        <span>✨ Command line program 

        <a class='external' target="_blank" rel="noopener noreferrer" alt='Live demo'
        href="https://aoyewol2.notion.site/Console-Based-Projects-2b1d0d3fd84e441595f00db72fbd73d8">
        <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></i></a>
        </span> 

      </div>
    </div>

    <div className="container reveal">
      <div className='image'><img src={intelliview} alt="Intelliview"></img></div>
      <div className='text'>
        <h3>Intelliview</h3>
        <b>React</b><b>HTML/CSS</b>
        <p>Intelliview is a platform that stores job applications, past interviews, and advice for students to prepare for future interviews at their dream company. SheHacks+ 6 was my first hackathon, so I had to learn new skills along the way. The hackathon exposed me to front-end dev!</p>

        <span>🏆 2nd Overall, Best Use of Google Cloud 
          <a class='external' target="_blank" rel="noopener noreferrer" href="https://github.com/rahmagillan/shehacks"><i ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></i></a>    

          <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/intelliview"><i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></i></a>
        </span>

      </div>
    </div>

    {/* <div className="container reveal">
      <div className='image'><img src={westernu} alt="Western University information site"></img></div>
      <div className='text'>
        <h3>05. Learn About Western University</h3>
        <b>HTML/CSS</b><b>JavaScript</b>
        <p>A web development assignment developed for CS1033 utilizing HTML, CSS and JavaScript! The site has a responsive and dynamic design which showcases Western University's campus, residences and history.</p> 
        <span>Web development project 
          <a class='external' target="_blank" rel="noopener noreferrer" href="https://github.com/aoyewol2/learn-about-westernu"><i class='bx bxl-github'></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://aoyewol2.github.io/learn-about-westernu/"><i class='bx bx-link-external'></i></a>
        </span>
      </div>
    </div> */}
  </div>

  <span className='reveal github wip'>Find more projects on my <a a target="_blank" rel="noopener noreferrer" href="https://github.com/aoyewol2">GitHub</a> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></span>

</div>

    </div>
  )
}

export default projects