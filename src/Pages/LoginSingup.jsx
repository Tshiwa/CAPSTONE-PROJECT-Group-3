import React from 'react'
import './css/LoginSingup.css'
import { Link } from 'react-router-dom'

export const LoginSingup = (props) => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-cont">
        <h1>Sign In</h1>
        <div className="loginsignup-fields">
        <input type="text" placeholder='Your name'/>
        <input type="email" placeholder='Your E-mail address'/>
        <input type="password" placeholder='Your Password'/>
      </div>
      <Link to={'/staff'}><button>Continue</button></Link>
      <p className="loginsignup-login">
        Already have an account ? <span>Login here</span>
      </p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id=''/>
        <p>By continuig, I agree to the terms of use & privacy policy</p>
      </div>
      </div>
    </div>
  )
}
