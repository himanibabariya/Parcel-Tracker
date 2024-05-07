import React from 'react';
import "./../../Style/Navbar.css";
import Logo from "./../../assets/logo.svg";

const Navbar = ({ signUp }) => {

  return (
    <div>
      <nav className='navbar'>
        <div className="left">
          <img src={Logo} alt="" />
        </div>

        <div className="right">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services" >Services</a></li>
            <li><a href="#contact" >Contact</a></li>
          </ul>
          <button className='signup-btn' onClick={signUp} >Sign-in/up</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;