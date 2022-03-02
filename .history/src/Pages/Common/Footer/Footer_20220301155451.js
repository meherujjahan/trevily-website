import React from 'react';
import './Footer.css';

const Footer = () => {
    return ( <
        div >
       
        <div className='footer'>
            <ul>
            <h2>Trevily</h2>
            <p>Welcome to our Trip and Tour Agency. Lorem simply text amet cing elit.
            </p><hr />
                <li>
                <p> Mirpur, Dhaka-1216, Bangladesh</p>
                </li>
                <li>+88 09666911463 / 4003
                </li>
                <li>tevily@gmail.com</li>
            </ul>
            <ul>
            <h3>Company</h3>
            <li> <b>Services</b></li>
            <li> <b>About Us</b></li>
            <li> <b>Work With Us</b></li>
            <li><b>Contract Us</b></li>
            <li> <b>Rewards</b></li>
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