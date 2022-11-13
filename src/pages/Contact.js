import ReactLogo from '../components/ReactLogo';
import CirclesSlim from "../assets/img/circles_slim.png";

// contact section and footer
export default function Contact() {

  return (
    <div style={{position: 'relative'}}>
      <div>
        <img src={CirclesSlim} alt="" className="backdrop"></img>
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
          <ReactLogo/>
      </div>
      
    </div>
  );
}
