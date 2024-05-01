import React, { useState } from 'react'
import "./../../Style/Signup.css"
import SignupImage from "./../../assets/images/boy2.png"
import ReactCardFlip from 'react-card-flip'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [isFlipped, setIsFlipped] = useState(false)

  function flipCard() {
    setIsFlipped(!isFlipped)
  }

  async function registartion() {
    let isValid = true
    setConfirmPasswordError("")

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match")
      isValid = false
    }

    if (!isValid) {
      return
    }

    const userData = { email, password, confirmPassword }
    try {
      const response = await fetch("http://localhost:5174/api/register", {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      if (response.ok) {
        const result = await response.json()
        console.warn("Registration successfull", result)
      }
      else {
        console.error("Registration failed")
      }
    }
    catch (error) {
      console.error("Error", error)
    }
  }

  async function login() {
    const userData = { email, password }

    try {
      const response = await fetch("http://localhost:5174/api/login", {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        const result = await response.json();
        console.warn("Login successfull", result);
      } else {
        console.error("Login failed");

      }
    } catch (error) {
      console.error("Error", error);

    }
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
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button className='btnSubmit' onClick={registartion}> Sign Up </button>
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
                <button className='btnSubmit' onClick={login}>Login</button>
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
