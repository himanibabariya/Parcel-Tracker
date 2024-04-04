import React, { useState } from 'react'
import "../Style/Home.css";
import DeliveryBoy from "../assets/images/boy.png";
import Navbar from "../Pages/Navbar";
import Arrow from "../assets/icons/arrow.svg";
import Signup from './Signup';

const Home = () => {
  const [showSignUp, setSignUp] = useState(false);

  const signUpForm = ()=>{
    setSignUp(true);
  }

  return (
    <div>
      <Navbar signUp={signUpForm}/>
      {showSignUp && <Signup />}
      <div className="home">
        <div className="left"> 
        <img src={DeliveryBoy} alt="" className='deliveryBoy'/>
          <h1>From Dispatch to Doorstep: Monitor Your Shipments Every Step of the Way!</h1>
          <form id='track' action="" method="get">
            <input type="text" placeholder='Enter tracking numbers...' />
            <button><img src={Arrow} alt="" /></button>
          </form>
          
          
        </div>
        <div className="right">
          <ul>
            <li>ebay</li>
            <li>Walmart</li>
            <li>AliExpress</li>
            <li>Amazon</li>
            <li>Etsy</li>
            <li></li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
