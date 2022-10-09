import React from 'react';

const Profile = {
 width: '350px',
 borderRadius: '9px',
 borderBottom: '29px',
 position: 'relative'

}

const Link = {
    fontSize: '14px',
    color: '#8dc4e9'
}

// about me section :)
const about =  () => {
    return (
        <div>
            <div className = "aboutme reveal">
                {/* <div className = "img">
                    <img src="https://i.ibb.co/HNbxs5Q/meagain.jpg" style={Profile}></img>
                </div> */}

                <div className = "img">
                    <img src="https://i.ibb.co/j3xyMf9/skills.png"
                    
                    style = {{
                        width: '400px',
                        }}

                    alt = "Photo of Ashley"
                    className = "intro">
                    
                    </img>
                </div>

                <div className = "desc">
                    <div className = "title" style={{display: 'inline'}}>
                        <h2 style={{textAlign: 'left'}}>About Me</h2>

                    </div>
                    <p>
                        Hello! My name is Ashley, and I enjoy creating and designing things through code. I was first introduced to coding many years ago when I tried editing custom Tumblr themes, way back when I didn’t even realize I was coding! 
                    </p>

                    <p>
                        Throughout high school, I pursued graphic and web design as both a hobby and a freelance job. In my senior year of high school, I decided to revisit coding and was inspired to major in Computer Science.
                    </p>

                    <p>
                    This fall, I am a Digital Media Designer at <a href="https://itrc.uwo.ca/" target="_blank" rel="noopener noreferrer" style={Link}>Western University</a>, and a designer at <a href="https://wits-uwo.ca/" target="_blank" rel="noopener noreferrer" style={Link}> Women+ in Tech Society</a> creating cool stuff!
                    </p>
                </div>
                <br id="skills"></br>
            </div>
        </div>
    );
}

export default about;