import React, { useState } from 'react';
import "./../../Style/Navbar.css";
import Logo from "./../../assets/logo.svg";

const Navbar = ({signUp}) => {
 
  return (
    <div>
      <nav>

        <div className="left">
          <img src={Logo} alt="" />
        </div>

        <div className="right">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <button className='signup-btn' onClick={signUp} >Sign-in/up</button>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
