import React from 'react';
import About from '../../About/About';
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
            <About></About>

        </div>
    );
};

export default Home;