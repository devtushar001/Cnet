import React from "react";
import './Footer.css'
import { assets } from "../../assets/escomData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>

      <div className="footer-container">
        <div className="footer">

          <div className="left">
            <div className="logo">
              <h1 id="i">T</h1>
              <h1 id="r">R</h1>
              <h1 id="o">o</h1>
              <h1 id="c">c</h1>
              <br />
              <h1 id="tools">Tools</h1>
            </div>
            <div id="connection">
              <div className="social-media">
                <img src={assets.youtube_icon} alt="" />
              </div>
              <div className="social-media">
                <img src={assets.facebook_icon} alt="" />
              </div>
              <div className="social-media">
                <img src={assets.insta_icon} alt="" />
              </div>
              <div className="social-media">
                <img src={assets.whatsapp_icon} alt="" />
              </div>
            </div>
          </div>
          <hr />
          <div className="middle">
            <h1>Contents</h1>
            <ul>
              <li><Link to="/">Home</Link> </li>
              <li><Link to="/contact-us">Contact Us</Link> </li>
              <li><Link to="/about-us">About Us</Link> </li>
              <li><Link to="/privacy-policy">Privacy Policy</Link> </li>
              <li><Link to="/projects">Projects</Link> </li>
            </ul>
          </div>
          <hr />
          <div className="right">
            <h1>Connect with us</h1>
            <span>iroc@gmai.com</span><br />
            <span>+91-984-378-4323</span>
          </div>
        </div>
        <hr />
        <p>Copyright &#169; 2027, TRoc all rights reserved</p>
      </div>
    </>
  )
}


export default Footer;