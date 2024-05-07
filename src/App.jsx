import React, { useState } from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Signup from './Components/SignUp/Signup';

function App() {
  const [showSignUp, setSignUp] = useState(false);

  const signUpForm = () => {
    setSignUp(true);
  };

  return (
      <div>
        <Navbar signUp={signUpForm} />
        {showSignUp && <Signup />}
        <Home/>
      </div>
  );
}

export default App;