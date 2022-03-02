import React from 'react';
import './Footer.css';

const Footer = () => {
    return ( <
        div >
       
        <div className='footer'>
            <ul>
            <h2>Trevily</h2>
                <li>
                <p>Mirpur, Dhaka-1216, Bangladesh</p>
                <p>+88 09666911463 / 4003</p>
                <p>tevily@gmail.com</p>
                </li>
            </ul>
            <ul>
            <h3>Company</h3>
                <li>
                <b>Services</b><br />
                <b>About Us</b><br />
                <b>Work With Us</b><br />
                <b>Contract Us</b><br />
                <b>Rewards</b>
                </li>
            </ul>
            
            <div>
            <i className="fab fa-facebook-square icon"></i><i className="fab fa-twitter-square icon"></i><i className="fab fa-instagram-square icon"></i><i className="fab fa-whatsapp-square icon"></i><i className="fab fa-google icon"></i>
            </div>
        </div>
        <p className='copyright'> copyright&copy; 2022 Tourist plaza</p>

        
        
        
        < /
        div >
    );
};

export default Footer;