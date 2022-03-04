import React from 'react';
import './Footer.css';

const Footer = () => {
    return ( <
        div >
       
        <div className='footer'>
            <ul>
            <h2 style={{ color: " rgba(247, 76, 14, 0.849)",fontSize:"45px" }}>Trevily</h2>
            <p>Welcome to our Trip and Tour Agency. <br/>Lorem simply text amet cing elit.
            </p><hr />
                <li>
                <p> Mirpur, Dhaka-1216, Bangladesh</p> </li>
                <li>+88 09666911463 / 4003
                </li>
                <li>trevily@gmail.com</li>
            </ul>
            <ul className='company'>
            <h2>Company</h2>
            <li> <p>Services</p></li>
            <li> <p>About Us</p></li>
            <li> <p>Work With Us</p></li>
            <li><p>Contract Us</p></li>
            <li> <p>Rewards</p></li>
            </ul>
            
            <div style={{padddingTop:"30px"}}>
            <i className="fab fa-facebook-square icon"></i><i className="fab fa-twitter-square icon"></i><i className="fab fa-instagram-square icon"></i><i className="fab fa-whatsapp-square icon"></i><i className="fab fa-google icon"></i>
            </div>
        </div>
      
        <p className='copyright'> copyright&copy; 2022 Trively</p>
        < /
        div >
    );
};

export default Footer;