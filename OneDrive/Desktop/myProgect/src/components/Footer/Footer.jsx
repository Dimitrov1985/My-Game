import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div class="block container">
        <div>
          <span class="logo">logo</span>
          <p>Subscribe to receive the latest news and updates about TDA.</p>
        </div>
        <div>
          <h4>About us</h4>
          <ul>
            <li>Zeux</li>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h4>Contact us</h4>
          <p>Subscribe to receive the latest news and updates about TDA.</p>
          <p>+1 234 567 890</p>
        </div>
      </div>
      <hr />
      <p>&copy; 2024 TDA. All rights reserved.</p>
    </footer>
  )
}

export default Footer
