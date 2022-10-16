import React, {useState} from 'react';

const Cursor = props => {

    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

  window.addEventListener('mousemove', (e) => {

    onmousemove = (e) => {
      
      setCursorX(e.pageX)
      setCursorY(e.pageY);
    };

  })

    return(

        <div className="cursor"

        style={{
          left:cursorX + -20 +'px',
          top:cursorY + -15 + 'px',
        }}

      ></div>
    )

}

export default Cursor;