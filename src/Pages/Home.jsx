import React, { useState } from 'react'
import "../Style/Home.css"
import DeliveryBoy from "../assets/images/boy.png"
import Navbar from "../Components/Navbar/Navbar"
import Arrow from "../assets/icons/arrow.svg"
import Signup from '../Components/SignUp/Signup'

const Home = () => {
  const [showSignUp, setSignUp] = useState(false)

  const signUpForm = () => {
    setSignUp(true)
  }

  return (
    <div>
      {showSignUp && <Signup />}
      <section id='home' className="home">
        <div className="left">

          <h1>From Dispatch to Doorstep: Monitor Your Shipments Every Step of the Way!</h1>
          <form id='track' action="" method="get">
            <input type="text" placeholder='Enter tracking numbers...' />
            <button><img src={Arrow} alt="" /></button>
          </form>
          <img src={DeliveryBoy} alt="" className='deliveryBoy' />
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
      </section>

      <section id="services">
        <h1>Tracking Services</h1>

        <h3>End-to-End Parcel tracking for over 200 countries</h3>
        <div className="services-left">

        <p>No corner of the globe is beyond our reach with ParcelTraker system.
          Harnessing unparalleled speed, we scan through thousands of shops and logistics
          providers simultaneously, delivering the latest updates on your parcel's journey,
          no matter where it travels worldwide.</p>

        <p>Enter your tracking number on our website and unlock real-time tracking
          information for all your parcels and packages instantly. With ParcelTracking,
          stay ahead of the curve and track with confidence, anytime, anywhere!</p>

          <button>Explore Supported Countries</button>
        </div>

        <div className="services-right">
          <img src="" alt="" />
        </div>
      </section>

      <section id="contact">
        contact
      </section>
    </div>
  )
}

export default Home
