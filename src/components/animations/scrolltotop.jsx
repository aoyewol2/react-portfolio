// scroll to top button

import React from 'react';

const Heart = () => {
    
    // styles
    const HeartStyles = {
        fontSize: '28px',
        position: 'fixed',
        left: '0',
        top: '0',
        zIndex : '10',
        userSelect :'none',
        padding: '20px',
        paddingLeft: '30px',
        color: '#8dc4e9',
        opacity: '0.9',

        '&:hover': {
            color: "#b3aae2"
          }

    }

    return (
        <div>     
            <a href="#home">
                <em class='bx bx-cloud btt' style={HeartStyles} title="Back to top"></em>
            </a>
        </div>
    )
}

export default Heart;