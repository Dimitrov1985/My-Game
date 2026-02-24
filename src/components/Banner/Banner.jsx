import React from 'react'
import './Banner.css'
import game5 from '../../img/game5.png'
const Banner = () => {
  return (
    <div>
        <div class="container banner">
        <h3>Lorem Ipsum</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <img src={game5} alt="banner" />
      </div>
    </div>
  )
}

export default Banner
