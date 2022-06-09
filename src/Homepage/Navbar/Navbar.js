import React from 'react';
import logo1 from '../../assets/logo/logo1.png'
import './navbar.css'

const Navbar = () => {
    return (
        <div class="navbar">
            <div class="navbar bg-base-100 mb-1">
                <div class="navbar-start h-12 pt-7">
                    <img src={logo1} alt="" width={'300px'} height={''} />
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 justify-between gap-5 text-xl font-bold mr-20">
                        <li><a>Skills</a></li>
                        <li><a>Work Experience</a></li>
                        <li><a>Achievements</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Talks</a></li>
                        <li><a>Contact me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;