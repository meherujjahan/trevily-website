import React from 'react';
import AboutUs from '../../Common/AboutUs/AboutUs';
import Banner from '../../Common/Banner/Banner';
import ContractUs from '../../Common/ContractUs/ContractUs';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import NotFound from '../../Common/NotFound/NotFound';
import Services from '../../Services/Services';

const Home = () => {
    return ( <
        div >
        <
        Header / >
        <Banner / >
        <Services/>
        <AboutUs/>
        <ContractUs/>
        <
        Footer / >
        <NotFound></NotFound>
        <
        /div>
    );
};

export default Home;