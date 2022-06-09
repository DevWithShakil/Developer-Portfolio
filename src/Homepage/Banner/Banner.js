import React from 'react';
import banner from '../../assets/logo/banner.png'
import './banner.css';
import Resume from '../../assets/resume/Resume.pdf'


const Banner = () => {

    return (
        <div className='banner'>
            <div class="">
                <h1 class="ml-10 text-left text-4xl pt-10 font-bold mx-auto max-w-screen-xl">Hi all, I'm Shakil Khan</h1>
                <p class="ml-10 mt-10 pb-10 max-w-screen-xl text-2xl text-justify leading-loose">A passionate Front end Web Developer having an experience of building Website with JavaScript/ Reactjs/Nodejs/ and some other cool libraries and frameworks.</p>
                <button className='button'> Contact Me</button>
                <a href={"https://drive.google.com/file/d/1ElOjrrbrXUdfWufqcNRxxfKnp12DcfNV/view?usp=sharing"} target="_blank" rel="noopener noreferrer" download className='button'> Download Resume</a>

            </div>
            <div>
                <img class='bannerPhoto' src={banner} alt="" />
            </div>

        </div>
    );
};

export default Banner;