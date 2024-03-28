import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>EMERAUDE</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("customers")}}><Link style={{textDecoration:'none'}} to='/customers'>Customer</Link>{menu==='customers'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("staff")}}><Link style={{textDecoration:'none'}} to='/staff_login'>Staff</Link>{menu==='staff'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button onClick={()=>{setMenu("staff")}}>Login</button></Link>
            <Link to='cart'><img src={cart} alt="" onClick={()=>{setMenu("customers")}}/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
