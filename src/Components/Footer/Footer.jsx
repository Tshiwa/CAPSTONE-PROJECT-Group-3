import React from 'react'
import './Footer.css';
import logo from '../Assets/logo.png';
import appb from'../Assets/appb.png';
import appg from'../Assets/appg.png';
import pay from '../Assets/pay.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="col">
            <img className="logo" src={logo} alt=""/>
            <h4>Contact</h4>
            <p><strong>Address: </strong>UCU Mukono, Buguju/Congolese area(Orange appertment)</p>
            <p><strong>Phone: </strong>+256 706-48 5052</p>
            <p><strong>Hours: </strong>10:00 - 18:00, mon - sat</p>
        </div>
        <div className="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Conctact Us</a>
        </div>
        <div className="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>
            <div className="col Install">
            <h4>Install App</h4>
            <p>From App Store or Googlo Play</p>
            <div className="row">
                <img className="im1" src={appb} alt=""/>
                <img src={appg} alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img className="im3" src={pay} alt=""/>
        </div>
        <div className="copyright">
            <p>© 2024, Designer T-rex Munyiko, web and mobile developper</p>
        </div>
    </div>
  )
}
