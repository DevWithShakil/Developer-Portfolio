import React from 'react';
import Banner from '../Banner/Banner';
import Experiences from '../Experience/Experiences';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Experiences></Experiences>

        </div>
    );
};

export default Home;