import React from 'react';
import logo1 from '../../assets/logo/logo1.png'
import './navbar.css'

const Navbar = () => {
    return (
        <div class="navbar sticky top-0 z-50">
            <div class="navbar bg-base-100 mb-1">
                <div class="navbar-start h-12 pt-7">
                    <img src={logo1} alt="" width={'250px'} height={''} />
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 justify-between gap-3 text-md font-bold mr-20">
                        <li><a href='#skills'>SKILLS</a></li>
                        <li><a href='#experienecs'>WORK EXPERIENCE</a></li>
                        <li><a>PROJECTS</a></li>
                        <li><a>BLOGS</a></li>
                        <li><a>ABOUT ME</a></li>
                        <li><a>CONTACT ME</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;