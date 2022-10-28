import React from 'react';

import work from '../assets/img/work.svg';

class Experience extends React.Component {

    render() {

        this.state = [

        {
        name: "CS Undergrad Society",
        description: "As a Frontend Developer, I develop and maintain the websites full interface using React.js, Tailwind and styled components.",
        tag: "Oct 2022 - ",
        logo: ''
        },
        {
        name: "Women+ in Tech Society",
        description: "As a Designer, I prototype and create interactive designs for the organizations websites. I work primarily with Figma.",
        tag: "July 2022 - ",
        logo: ''
        },
        // digital media designer
        {
        name: "Western University",
        description: "I work as a Digital Media Designer and Developer where I develop content for the universities websites. I work with Jira and Figma.",
        tag: "June 2022 -",
        logo: ''
        },

    ]

    return <div className='experience'>

        <div style={{paddingBottom: '30px'}}></div>
        <h2 className='reveal'>Where I Work</h2>
        <p className='tag reveal'>What I'm busy doing outside of being a student.</p>

        <div style={{paddingBottom: '70px'}}></div>
        <div className='exp-container'>

        {this.state.map(expData => {

            return(

                <div className='exp-box reveal'>

                    <div className='exp-image'>
                    <img src={work} alt=''></img>
                    </div>

                    <b className='exp-tag'>{expData.tag}</b>
                    <h5>{expData.name}</h5>
                    <p>{expData.description}</p>
                </div>  
            )
        })}

        <div style={{paddingBottom: '20px'}}></div>

        </div>
    </div>;
        
}
}

export default Experience