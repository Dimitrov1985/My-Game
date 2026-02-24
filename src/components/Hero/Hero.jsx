import React from 'react'
import "./Hero.css"
import joystick from '../../img/joystick.svg'
const Hero = () => {
  return (
    
       <div className="hero container">
      <div className="hero--info">
        <h2>3D game Dev</h2>
        <h1>Work that we produce for our clients</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
        <button className="btn_info">Get more details</button>
      </div>

      <img src={joystick} alt="joystick" />
    </div>
    
  )
}

export default Hero
