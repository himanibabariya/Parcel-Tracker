import React from 'react'
import "../Style/Home.css";
import DeliveryBoy from "../assets/images/boy.png";
import Arrow from "../assets/icons/arrow.svg";
import Box from "../assets/images/box.png";

const Home = () => {
  return (
    <div>
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
