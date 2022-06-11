import React from 'react';
import Banner from '../Banner/Banner';
import Experiences from '../Experience/Experiences';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Experiences></Experiences>
            <Projects></Projects>

        </div>
    );
};

export default Home;