import React, { useState } from 'react'
import "../Style/Home.css"
import DeliveryBoy from "../assets/images/boy.png"
import Navbar from "../Components/Navbar/Navbar"
import Arrow from "../assets/icons/arrow.svg"
import Signup from '../Components/SignUp/Signup'

const Home = () => {
  const [showSignUp, setSignUp] = useState(false)

  const signUpForm = ()=>{
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
           <img src={DeliveryBoy} alt="" className='deliveryBoy'/>  
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
      </section>

      <section id="contact">
        contact
      </section>
    </div>
  )
}

export default Home
