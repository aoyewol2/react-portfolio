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
        padding: '30px',
        color: '#8dc4e9',
        opacity: '0.7',

        '&:hover': {
            color: "#b3aae2"
          }

    }

    return (
        <div>     
            <a href="#home">
                <em class='bx bx-cloud' style={HeartStyles}></em>
            </a>
        </div>
    )
}

export default Heart;