import React from 'react';
import aboutUsImg from '../../../assests/AboutUs/images (11).jfif';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <h1>About Us</h1>
            <div className='aboutUs'>
            <div> <img className='aboutUsImg' src={aboutUsImg} alt="" /></div>
            <div className='aboutUsText'><h1>Plan your Trip With <br /><span>Trevily</span> </h1> </div>
            </div>
           
        </div>
    );
};

export default AboutUs;
