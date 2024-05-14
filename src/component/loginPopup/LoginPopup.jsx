import React, { useState } from 'react'
import { assets } from '../../assets/assets/assets';
import "./loginPopup.css"
const LoginPopup = ({setShowLogin}) => {
  const [currState,setCurrState] = useState("Login");
  return (
    <div className='login-popup'>
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img src={assets.cross_icon} alt="" onClick={()=>setShowLogin(false)}/>
        </div>
        <div className="login-popup-input">
          
          {currState==="Login" ? <></> : <input type="text" placeholder='Your Name' required/>}
          <input type="email" placeholder='Your Email' required/>
          <input type="password" placeholder='Password' required/>
        </div>
        <button>{(currState==="Login")? "Login" : "Create Account"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {
          (currState==="Login")?
          <p>Create a new Account? <span onClick={()=>setCurrState("Sing Up")}>Click Here</span></p>:
          <p>Already have an Account? <span onClick={()=>setCurrState("Login")}>Click Here</span></p>
        }
      </div>
    </div>
  )
}

export default LoginPopup