import React from 'react';
import { Button } from 'react-bootstrap';
import aboutUsImg from '../../../assests/AboutUs/images (11).jfif';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <Button variant="danger">About Us</Button>
            <div className='aboutUs'>
            <div> <img className='aboutUsImg' src={aboutUsImg} alt="" /></div>
            <div className='aboutUsText'><h1>Plan your Trip With <br /><span>Trevily</span> </h1>
            <br />
            <p>There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>
            <ul>
                <li>
                <b>Invest in your simply neighborhood</b>
                </li>
                <li><b>Support people in free text extreme</b></li>
                <li><b>Largest global industrial business</b></li>
            </ul>
             </div>
            </div>
           
        </div>
    );
};

export default AboutUs;
