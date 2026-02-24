import React from 'react'
import './Features.css'
import feature1 from '../../img/feature1.png'
import feature2 from '../../img/feature2.png'
import feature3 from '../../img/feature3.png'
import feature4 from '../../img/feature4.png'
import feature5 from '../../img/feature5.png'
import feature6 from '../../img/feature6.png'
import arrow from '../../img/arrow.png'

const Features = () => {
  return (
    <div class="features">
      <div class="container">
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div class="info">
          <div class="block">
            <img src={feature1} alt="Mobile Game Development" />
            <p>Mobile Game Development</p>
            <img src={arrow} alt="arrow" />
          </div>
          <div class="block">
            <img src={feature2} alt="Mobile Game Development" />
            <p>PC Game Development</p>
            <img src={arrow} alt="arrow" />
          </div>
          <div class="block">
            <img src={feature3} alt="Mobile Game Development" />
            <p>PS4 Game Development</p>
            <img src={arrow} alt="arrow" />
          </div>
          <div class="block">
            <img src={feature4} alt="Mobile Game Development" />
            <p>AR/VR Solutions</p>
            <img src={arrow} alt="arrow" />
          </div>
          <div class="block">
            <img src={feature5} alt="Mobile Game Development" />
            <p>AR/ VR design</p>
            <img src={arrow} alt="arrow" />
          </div>
          <div class="block">
            <img src={feature6} alt="Mobile Game Development" />
            <p>3D Modelings</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
