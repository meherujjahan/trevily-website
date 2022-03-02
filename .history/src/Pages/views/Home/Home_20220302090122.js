import React from 'react';
import AboutUs from '../../Common/AboutUs/AboutUs';
import Banner from '../../Common/Banner/Banner';
import ContractUs from '../../Common/ContractUs/ContractUs';
import NotFound from '../../Common/NotFound/NotFound';
import Services from '../../Services/Services';

const Home = () => {
    return ( <
        div >
       
        <Banner / >
        <Services/>
        <AboutUs/>
        <ContractUs/>
       
        <NotFound></NotFound>
        <
        /div>
    );
};

export default Home;