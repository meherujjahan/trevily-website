import React from 'react';
import './Footer.css';

const Footer = () => {
    return ( <
        div >
       
        <div className='footer'>
            <ul>
            <h2>Trevily</h2>
            <p>Welcome to our Trip and Tour Agency. <br/>Lorem simply text amet cing elit.
            </p><hr />
                <li>
                <p> Mirpur, Dhaka-1216, Bangladesh</p> </li>
                <li>+88 09666911463 / 4003
                </li>
                <li>trevily@gmail.com</li>
            </ul>
            <ul className='company'>
            <h3>Company</h3>
            <li> <p>Services</p></li>
            <li> <p>About Us</p></li>
            <li> <p>Work With Us</p></li>
            <li><p>Contract Us</p></li>
            <li> <p>Rewards</p></li>
            </ul>
            
        </div>
        <p className='copyright'> copyright&copy; 2022 Tourist plaza</p>
        < /
        div >
    );
};

export default Footer;