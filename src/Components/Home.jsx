import React from 'react'
import "./Home.css";
import DeliveryBoy from "../assets/images/boy.png";
import Arrow from "../assets/icons/arrow.svg";
import Box from "../assets/images/box.png";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="left">
          {/* <img src={Box} alt="" className='box'/>
          <img src={Box} alt="" className='box'/>
          <img src={Box} alt="" className='box'/>
          <img src={Box} alt="" className='box'/>
          <img src={Box} alt="" className='box'/>
          <img src={Box} alt="" className='box'/> */}
          <h1>From Dispatch to Doorstep: Monitor Your Shipments Every Step of the Way!</h1>
          <form id='track' action="" method="get">
            <input type="text" placeholder='Enter tracking numbers...' />
            <button><img src={Arrow} alt="" /></button>
          </form>
        </div>
        <div className="right">
          <img src={DeliveryBoy} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
