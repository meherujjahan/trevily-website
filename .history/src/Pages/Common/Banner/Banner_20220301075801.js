
import React from 'react';
import BannerImg from '../../../assests/Banner/36241088-travel-concept-thailand.webp';
import './Banner.css';

const Banner = () => {
    return ( <
        div >
        <
        h1 > Banner < /h1> 
        <img className='bannerImg' src={BannerImg} alt="" />
        
        <
        /div>
    );
};

export default Banner;