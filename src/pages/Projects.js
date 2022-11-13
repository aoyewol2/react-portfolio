import styles from "../styles/modules/Projects.module.css"

import starship from '../assets/img/starship.png'
import intelliview from '../assets/img/intelliview.png'
import postwize from '../assets/img/postwize.png'
import typeconverter from '../assets/img/typeconverter.png'
import GitHub from '../components/GitHub'
import GitHub2 from '../components/GitHub2'
import External from '../components/External'

// projects section
export default function Projects() {

  return (
    <div className="reveal">
      <h2>Projects I've Built</h2>
      <p className="tag reveal">
        A few of my most recent personal, school and hackathon projects
      </p>
      <br></br>

      <div className="projects">
        <div>
          <div className="container reveal">
            <div className="image">
              <img
                src={typeconverter}
                alt="Western University information site"
              ></img>
            </div>
            <div className="text">
              <h3>Type Converter</h3>
              <b>C Language</b>
              <b>Terminal-based</b>
              <p>
                Programmed in C, Type Converter computes unit conversion based
                on user input. The program accepts conversions for pounds,
                kilograms, acres, hectares, litres, etc. Catches type mismatches
                and errors using functions, iteration loops and conditional
                statements.{" "}
              </p>
              <span className={styles.span}>
                ✨ Command line program
                <a
                  class="external"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Live demo"
                  href="https://github.com/aoyewol2/type-converter"
                >
                  <GitHub />
                </a>
              </span>
            </div>
          </div>

          <div className="container reveal">
            <div className="image">
              <img src={postwize} alt="Postwize"></img>
            </div>
            <div className="text">
              <h3>PostWize</h3>

              <b>Bootstrap</b>
              <b>Netlify</b>

              <p>
                PostWize is designed to streamline the job application process
                by storing all your career resources in one site! Users can see
                their pending applications, chat and schedule meetings with
                recruiters, and track important dates with a personalized
                calendar.
              </p>

              <span className={styles.span}>
                🏆 Best Web Development Track
                <a
                  class="external"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/aoyewol2/PostWize"
                >
                  <GitHub />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://devpost.com/software/postwize"
                >
                  <External />
                </a>
              </span>
            </div>
          </div>

          <div className="container reveal">
            <div className="image">
              <img src={intelliview} alt="Intelliview"></img>
            </div>
            <div className="text">
              <h3>Intelliview</h3>
              <b>React</b>
              <b>HTML/CSS</b>
              <p>
                Intelliview is a platform that stores job applications, past
                interviews, and advice for students to prepare for interviews at
                their dream company. This hackathon project exposed me to
                frontend development!
              </p>

              <span className={styles.span}>
                🏆 2nd place overall
                <a
                  class="external"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/rahmagillan/shehacks"
                >
                  <GitHub />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://devpost.com/software/intelliview"
                >
                  <External />
                </a>
              </span>
            </div>
          </div>

          <div className="container reveal">
            <div className="image">
              <img src={starship} alt="Intelliview"></img>
            </div>
            <div className="text">
              <h3>Starship App</h3>
              <b>Next.js</b>
              <b>React</b>
              <p>
                Starship is a web application I'm currently working on that
                allows users to boost their producity with in-app widgets.
                Features include a to-do list for users to track their tasks, a
                pomodoro timer, and suggested Lofi music to play while the user
                is working.
              </p>

              <span>🚀 Coming soon</span>
            </div>
          </div>
        </div>
        <br></br>
        <span className="github">
          Find more projects on my{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/aoyewol2"
          >
            GitHub
          </a>{" "}
          <GitHub2 />
        </span>
      </div>
    </div>
  );
}