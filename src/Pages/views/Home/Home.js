import React from 'react';
import AboutUs from '../../Common/AboutUs/AboutUs';
import Banner from '../../Common/Banner/Banner';
import ContractUs from '../../Common/ContractUs/ContractUs';
import Services from '../../Services/Services';

const Home = () => {
    return ( <
        div >
       
        <Banner / >
        <Services/>
        <AboutUs/>
        <ContractUs/>
        <
        /div>
    );
};

export default Home;