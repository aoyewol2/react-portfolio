import React from 'react';

// skills section

const skills = () => {
  return (
    <div className="skills">
      <div>
        <h2 className='reveal'>Skills</h2>
      </div>
      <div className="table reveal">
        <table className="content-table" border="0">
          <thead>
            <tr>
              <th>Languages</th>
              <th>Tools</th>
              <th>Design</th>
              <th>Capabilities</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td>HTML/CSS</td>
              <td>Git &amp; Github</td>
              <td>After Effects, Premiere Pro</td>
              <td>Database design &amp; development</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>Visual Studio Code</td>
              <td>Figma</td>
              <td>Entity-relationship modelling</td>
            </tr>

            <tr>
              <td>Python</td>
              <td>Microsoft Access (Database)</td>
              <td>Adobe XD</td>
              <td>Wireframing</td>
            </tr>

            <tr id="projects">
              <td>SQL, XML</td>
              <td>Netlify</td>
              <td>Photoshop</td>
              <td>Prototyping</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
    </div>
  )
}

export default skills