import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Discover The Future With GPT-3</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <a href="#top"><img src={gpt3Logo} alt="logo" /></a>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>  
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Contact</h4>
          <p>+16041234567</p>
          <p>contact@mail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@2022 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer