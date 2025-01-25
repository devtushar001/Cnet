import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { EscomContext } from "../../Context/escomContext";
import { assets } from "../../assets/escomData";

const Navbar = () => {
  const { sideBar, setSidekBar } = useContext(EscomContext);
  useEffect(() => {
  })
  return (
    <>
      <div className="navbar">
        <div className="left-section">
          <Link className="no-style-link" to="/"><img src={assets.app_store_icon} alt="" /></Link>
        </div>
        <div className="right-section">
          {!sideBar ?
            <div className="tools-item" onClick={() => setSidekBar(true)}>
              <img src={assets.add_icon} alt="" />
            </div>
            : <div id="sidebar-tools-display">
              <div className="user-info">
                <div>Welcom user</div>
                <button onClick={() => setSidekBar(false)}>X</button>
              </div>
              <ul id="links">
                <Link className="no-style-link" to="/"><li onClick={() => setSidekBar(false)}>Home</li></Link>
                <Link className="no-style-link" to="/projects"> <li onClick={() => setSidekBar(false)}> projects</li></Link>
                <Link className="no-style-link" to="/about-us"><li onClick={() => setSidekBar(false)}>About Us</li></Link>
                <Link className="no-style-link" to="/contact-us"><li onClick={() => setSidekBar(false)}>Contact Us</li></Link>
                <Link className="no-style-link" to="/privacy-policy"><li onClick={() => setSidekBar(false)}>Privacy Policy</li></Link>
                <Link className="no-style-link" to="/login-signup"><button id="sign-up" onClick={() => setSidekBar(false)}>Sign Up</button></Link>
              </ul>
            </div>}
          <div className="user-profile">
            <Link to='/user-profile'><img src={assets.user_icon} alt="" /></Link> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;