import React from 'react'
import './Projects.css'
import projects1 from '../../img/projects1.png'
import projects2 from '../../img/projects2.png'
import projects3 from '../../img/projects3.png'
import projects4 from '../../img/projects4.png'
import projects5 from '../../img/projects5.png'
import projects6 from '../../img/projects6.png'

const Projects = () => {
  return (
    <div>
       <div class="container projects">
        <h3>Our Resent Projects</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div class="images">
          <img src={projects1} alt="Projects" />
          <img src={projects2} alt="Projects" />
          <img src={projects3} alt="Projects" />
        </div>
        <div class="images">
          <img src={projects4} alt="Projects" />
          <img src={projects5} alt="Projects" />
          <img src={projects6} alt="Projects" />
        </div>
        <a href="" class="see-all">SEE ALL</a>
      </div>
    </div>
  )
}

export default Projects
