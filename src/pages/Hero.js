import Image from '../assets/img/thatsme.png';
import Resume from '../assets/AshleyOyewole_Resume.pdf';
import Circles from '../assets/img/circles.png';
import ResumeIcon from '../components/ResumeIcon'

export default function Home() {

  return (
    <div className="flex">
      <div>
        <img
          src={Circles}
          alt=""
          className="backdrop reveal-opacity-backdrop"
        ></img>
      </div>
      <div className="top" id="home"></div>
      <div>
        <img src={Image} className="intro reveal-blur" alt="Ashley Oyewole" />
      </div>

      <div id="bg-repeat" className="reveal-delay"></div>

      <div>
        <div>
          <br></br>
          <br></br>
          <span className="hi reveal-opacity">
            <u className="pos">Hi there, I'm Ashley</u>
          </span>
        </div>

        <div className="reveal-opacity">
          <h1>
            A software developer with a passion for <u className="dash">UI</u>{" "}
            and building products and systems users can{" "}
            <u className="interact reveal-blur">interact</u> with
          </h1>
        </div>
      </div>

      <div>
        <span className="resume reveal-blur">
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <i>
              <ResumeIcon/> Download resume
            </i>
          </a>
        </span>
      </div>

    </div>
  );
}

console.log("🐰 You found an easter egg!");