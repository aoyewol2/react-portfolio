import React from 'react';
import Term from '../animations/scrollToTop';

// navbar section -- fixed on page
const navbar = () => {
  return (
    <div className='reveal-opacity'>
      <Term/>

      <div className="navbar reveal-opacity">
          <a href="#contact">Contact</a>
        </div>
    </div>
  )
}

export default navbar