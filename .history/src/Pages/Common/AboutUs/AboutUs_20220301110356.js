import React from 'react';
import aboutUsImg from '../../../assests/AboutUs/images (11).jfif';

const AboutUs = () => {
    return (
        <div>
            <h1>About Us</h1>
            <div className='aboutUs'>
            <div> <img src={aboutUsImg} alt="" /></div>
            <div><h1>Plan your Trip With <br /> Trevily</h1> </div>
            </div>
           
        </div>
    );
};

export default AboutUs;
