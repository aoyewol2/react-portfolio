import Image from '../assets/img/thatsme.png';
import Resume from '../assets/AshleyOyewole_Resume.pdf';
import Circles from '../assets/img/circles.svg';

export default function Home() {

  return (

    <div className='flex'>
      <div>
        <img src={Circles} alt="" className="backdrop"></img>
      </div>
      <div className='top' id="home"></div>
        <div>
          <img src={Image} 
          className="intro reveal-opacity-2"
          alt = "Ashley Oyewole" />
        </div>

      <div id='bg-repeat' className='reveal-delay'>

      </div>

      <div>
        <div>
          <br></br><br></br>
          <span className="hi reveal-opacity"><u className='pos'>Hi there, I'm Ashley</u></span>
        </div>

        <div className='reveal-opacity'>
          <h1>A software developer with a passion for <u className='dash'>UI</u> and building <u className='dash'>products</u> and systems users can <u className="interact">interact</u> with</h1>
        </div>
      </div>
      <div className='resume reveal-opacity'>
        <span><a href={Resume}target="_blank"
        rel="noopener noreferrer"><i>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg> Download resume</i></a></span>
      </div>
      <br id="about"></br>

    </div>
  )
}

console.log("🐰 You found an easter egg!");