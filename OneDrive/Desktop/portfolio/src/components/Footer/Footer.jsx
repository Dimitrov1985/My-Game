import React from 'react'
import './Footer.css'
import { infoLinks, followLinks } from '../../Data/FooterData';
import FooterLinkGroup from './FooterLinkGroup';
const Footer = () => {
  const crrentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="container footer-wrapper">
            <div className="about-group">
                <h2>Ilay</h2>
                <p>Frontend Developer</p>
                
            </div>
            <div className="hr"></div>
            <FooterLinkGroup title="More" links={infoLinks} isSocial={false} />
            
            <div className="hr"></div>
           <FooterLinkGroup title="Follow" links={followLinks} isSocial={true} />
        </div>
        <p className="footer-copyright">© <span className="year">{crrentYear} </span> by Coding Snow. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Footer
