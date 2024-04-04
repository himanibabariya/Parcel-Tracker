import React, { useState } from 'react'
import "../Style/Signup.css";
import SignupImage from "../assets/images/boy2.png";
import ReactCardFlip from 'react-card-flip';

const Signup = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }


  return (

    <div>

      <div className="container">
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
          {/* Signup form  */}
          <div className='signUpForm'>
            <div className="signUpLeft">
              <div className="imageContainer">
                <img src={SignupImage} alt="" />
              </div>
            </div>
            <div className="signUpRight">
              <h1>Get Started!</h1>
              <div className='haveAnAccount'>
                <span>Already have an account?</span>
                <span><button onClick={flipCard} className='btnLink'>Login</button></span>
              </div>
              <form action="">
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
                <input type="text" placeholder='Confirm Password' />
                <button type="submit" className='btnSubmit'>Sign Up</button>
              </form>
            </div>
          </div>


          {/* Login form  */}
          <div className="loginForm">
            <div className="loginLeft">

              <h1>Login</h1>
              <div className='haveAnAccount'>
                <span>New on ParcelTracker ?</span>
                <button onClick={flipCard} className='btnLink'>Sign up</button>
              </div>
              <form action="">
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
                <button className='forgetPassword'>I forgot my password!</button>
                <button type="submit" className='btnSubmit'>Login</button>
              </form>


            </div>
            <div className="loginRight">
              <div className="imageContainer">
                <img src={SignupImage} alt="" />
              </div>
            </div>

          </div>

        </ReactCardFlip>

      </div>

    </div>
  )
}

export default Signup
