import React from 'react';
import { assets } from '../../assets/assets/assets';
import "./footer.css";
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum culpa a quasi alias officia, ut quisquam. Autem ducimus fuga quia, maxime ipsum dignissimos delectus! Sunt sequi delectus vitae voluptatem!
                </p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+855-964-136-572</li>
                    <li>tongengtong8@gamil.com</li>
                    
                </ul>
            </div>
            
        </div>
        <hr />
        <p className='footer-copyright'>
            copyright 2024 Tomato.com - All rights reserved
        </p>
    </div>
  )
}

export default Footer