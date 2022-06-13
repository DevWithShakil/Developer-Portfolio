import React from 'react';
import About from '../../About/About';
import Footer from '../../Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;