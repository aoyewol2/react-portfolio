import React from 'react';

// contact section and footer
const contact = () => {
  return (
    <div>
        <div id="contact" className ="contact reveal">
            <h2>Contact</h2>
            
            <h3>Let's get in touch!</h3>
            
            <p>I would love to chat about potential work and internship opportunities. I'm currently seeking design and frontend web development positions. Let's get the conversation started! </p>
            
            <a href="mailto:aoyewol2@uwo.ca" className='email'>aoyewol2@uwo.ca</a>
            
            <br></br><br></br><br></br>
        </div>

      <div className="footer">

        <div>
          <a href="https://github.com/aoyewol2/react-portfolio"
           target="_blank"
           rel="noopener noreferrer" style={{textDecoration: 'none'}}>
          <span>&lt;/&gt; Built by Ashley Oyewole</span></a>
        </div> 

        <span>Deployed with Netlify</span>
      </div>
    </div>
  );
}

export default contact