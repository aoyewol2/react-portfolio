import React from 'react';

import figma from '../assets/ico/figma.svg'
import clang from '../assets/ico/clang.svg'
import tw from '../assets/ico/tw.svg'
import js from '../assets/ico/js.svg'
import py from '../assets/ico/py.svg'
import react from '../assets/ico/react.svg'
import sass from '../assets/ico/sass.svg'

const skills = () => {
  
  return (
    <div className="skills">
      <div>
        <div style={{paddingBottom: '40px'}}></div>
        <h2 className='reveal'>Tools I Build With</h2>
        <p className='tag reveal'>The tools and technologies I use to design and develop my projects.</p>
        <div style={{paddingBottom: '40px'}}></div> 
      </div>
      <div className="gradient reveal">
      <div style={{paddingBottom: '40px'}}></div>   
      <div className="skills-container reveal">

        <img src={figma} alt='' className='skills-box'></img>
        <img src={clang} alt='' className='skills-box'></img>
        <img src={tw} alt='' className='skills-box'></img>
        <img src={react} alt='' className='skills-box pulse'></img>
        <img src={js} alt='' className='skills-box'></img>
        <img src={py} alt='' className='skills-box'></img>
        <img src={sass} alt='' className='skills-box'></img>
        {/* <p>Coming soon.</p> */}
      </div>
      </div>
      <div style={{paddingBottom: '60px'}}></div>   
    </div>
  )
}

export default skills