import React from 'react';
import AboutUs from '../../Common/AboutUs/AboutUs';
import Banner from '../../Common/Banner/Banner';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import Services from '../../Services/Services';

const Home = () => {
    return ( <
        div >
        <
        Header / >
        <
        Banner / >
        <Services/>
        <AboutUs/>
        <
        Footer / >
        <
        /div>
    );
};

export default Home;