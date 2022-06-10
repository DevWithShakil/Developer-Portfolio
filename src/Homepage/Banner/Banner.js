import React from 'react';
import banner from '../../assets/logo/banner.png'
import './banner.css';
import doing from '../../assets/logo/doing.png'
import { FaHtml5, FaCss3Alt, FaReact, FaNpm, FaNodeJs, FaJsSquare, FaBootstrap, FaVuejs, FaDatabase } from 'react-icons/fa';
import { FcRight } from "react-icons/fc"


const Banner = () => {

    return (
        <div class=''>
            <div class='banner pb-10'>

                <div>
                    <h1 class="ml-10 text-left text-4xl pt-10 font-bold mx-auto max-w-screen-xl">Hi all, I'm Shakil Khan</h1>
                    <p class="ml-10 mt-10 pb-10 max-w-screen-xl text-2xl text-justify leading-loose">A passionate Front end Web Developer having an experience of building Website with JavaScript/ Reactjs/Nodejs/ and some other cool libraries and frameworks.</p>
                    <button className='button'> Contact Me</button>
                    <a href={"https://drive.google.com/file/d/1ElOjrrbrXUdfWufqcNRxxfKnp12DcfNV/view?usp=sharing"} target="_blank" rel="noopener noreferrer" download className='button'> See My Resume</a>

                </div>
                <div>
                    <img class='bannerPhoto' src={banner} alt="" />
                </div>

            </div>

            <hr className='hr' />

            <div class="banner">
                <div>
                    <img class="doingImg mt-20" src={doing} alt="" />
                </div>
                <div class='ml-20' id='skills'>
                    <h2 className='text-5xl font-bold mt-10 pt-10 text-center text-[#242F9B]'>What I Do</h2>
                    <p className='text-xl mt-5 pt-5 ml-10 text-[#242F9B]'>CRAZY MERN STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                    <div className='flex text-[#F77E21]'>
                        <div>
                            <FaHtml5 className='text-6xl mt-10 ml-16 cursor-pointer'></FaHtml5>
                            <h3 className='ml-14 pl-4 pt-2 text-xs'>HTML5</h3>
                        </div>
                        <div>
                            <FaCss3Alt className='text-6xl mt-10 ml-16 cursor-pointer'></FaCss3Alt>
                            <h3 className='ml-14 pl-5 pt-2 text-xs'>CSS3</h3>
                        </div>
                        <div>
                            <FaBootstrap className='text-6xl mt-10 ml-16 cursor-pointer'></FaBootstrap>
                            <h3 className='ml-14 pl-3 pt-2 text-xs'>Bootstrap</h3>
                        </div>

                        <div>
                            <FaJsSquare className='text-6xl mt-10 ml-16 cursor-pointer'></FaJsSquare>
                            <h3 className='ml-14 pl-3 pt-2 text-xs'>Javascript</h3>
                        </div>

                        <div>
                            <FaReact className='text-6xl mt-10 ml-16 cursor-pointer'></FaReact>
                            <h3 className='ml-14 pl-6 pt-2 text-xs'>React</h3>
                        </div>

                    </div>

                    <div className='flex ml-16 text-[#F77E21]'>
                        <div>
                            <FaNpm className='text-6xl mt-10 ml-16 cursor-pointer'></FaNpm>
                            <h3 className='ml-14 pl-6 pt-2 text-xs'>NPM</h3>
                        </div>
                        <div>
                            <FaNodeJs className='text-6xl mt-10 ml-16 cursor-pointer'></FaNodeJs>
                            <h3 className='ml-14 pl-5 pt-2 text-xs'>NodeJS</h3>
                        </div>
                        <div>
                            <FaVuejs className='text-6xl mt-10 ml-16 cursor-pointer'></FaVuejs>
                            <h3 className='ml-14 pl-6 pt-2 text-xs'>VueJS</h3>
                        </div>
                        <div>
                            <FaDatabase className='text-6xl mt-10 ml-16 cursor-pointer'></FaDatabase>
                            <h3 className='ml-14 pl-4 pt-2 text-xs'>Database</h3>
                        </div>
                    </div>
                    <div class='text-xl mt-10 leading-loose'> <br />
                        <h2>⚡ Develop highly interactive Front end / User Interfaces for your web <br /> <br />
                            ⚡ Progressive Website ( PWA ) in normal and SPA Stacks <br />
                            <br />
                            ⚡ Integration of third party services such as Firebase/ AWS
                        </h2>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Banner;