import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.svg";

const Navbar = () => {
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
          <button>Sign-in/up</button>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
