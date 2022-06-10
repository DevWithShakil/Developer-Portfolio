import React from 'react';
import doorway from '../../assets/logo/doorway.png'
import logo2 from '../../assets/logo//logo2.jpg'
import logo3 from '../../assets/logo//logo3.jpg'
import './experience.css'
import { BiCaretRight } from "react-icons/bi";

const Experiences = () => {
    return (
        <div class='bg-[#CDF0EA]' id='experienecs'>
            <h2 class='text-5xl ml-10 mb-10 pt-10'>Experiences</h2>
            <div class='flex gap-10 justify-center'>
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure className='bg-[#147cf4] h-52 text-white text-2xl font-bold'>Marketing Doorway
                        </figure>
                        <img class='logo rounded-full' src={doorway} alt="" width={'150px'} />
                        <div class="card-body">
                            <h2 class="card-title justify-center text-3xl">Front End Developer</h2>
                            <h2 class="card-title justify-center text-xl">June 2020 - December 2020</h2>

                            <ul class='leading-loose'>
                                <li class='flex'>
                                    <div class='mt-2'>
                                        <BiCaretRight></BiCaretRight>
                                    </div>
                                    <div>
                                        Use markup languages like HTML to create user-friendly web pages.
                                    </div>

                                </li>
                                <li class='flex'>
                                    <div class='mt-2'>
                                        <BiCaretRight></BiCaretRight>
                                    </div>
                                    <div>
                                        Maintain and improve website
                                    </div>

                                </li>
                                <li class='flex'>
                                    <div class='mt-2'>
                                        <BiCaretRight></BiCaretRight>
                                    </div>
                                    <div>
                                        Optimize applications for maximum speed
                                    </div>

                                </li>

                            </ul>


                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure className='bg-[#383838] h-52 text-white text-2xl font-bold'>Programming Hero</figure>
                        <img class='logo rounded-full' src={logo2} alt="" width={'150px'} />
                        <div class="card-body">
                            <h2 class="card-title justify-center text-3xl">Front End Developer</h2>
                            <h2 class="card-title justify-center text-xl">June 2020 - December 2020</h2>

                            <ul class='leading-loose'>
                                <li class='flex'>
                                    <div class='mt-2'>
                                        <BiCaretRight></BiCaretRight>
                                    </div>
                                    <div>
                                        Use markup languages like HTML to create user-friendly web pages.
                                    </div>

                                </li>
                                <li class='flex'>
                                    <div class='mt-2'>
                                        <BiCaretRight></BiCaretRight>
                                    </div>
                                    <div>
                                        Maintain and improve website
                                    </div>

                                </li>
                                <li class='flex'>
                                    <div class='mt-2'>
                                        <BiCaretRight></BiCaretRight>
                                    </div>
                                    <div>
                                        Optimize applications for maximum speed
                                    </div>

                                </li>

                            </ul>


                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure className='bg-[#a4240c] h-52 text-white text-2xl font-bold'>Quora</figure>
                        <img class='logo rounded-full' src={logo3} alt="" width={'150px'} />
                        <div class="card-body">
                            <h2 class="card-title justify-center text-3xl">Front End Developer</h2>
                            <h2 class="card-title justify-center text-xl">June 2020 - December 2020</h2>

                            <ul class='leading-loose'>
                                <li class='flex'>
                                    <div class='mt-2'>
                                        <BiCaretRight></BiCaretRight>
                                    </div>
                                    <div>
                                        Use markup languages like HTML to create user-friendly web pages.
                                    </div>

                                </li>
                                <li class='flex'>
                                    <div class='mt-2'>
                                        <BiCaretRight></BiCaretRight>
                                    </div>
                                    <div>
                                        Maintain and improve website
                                    </div>

                                </li>
                                <li class='flex'>
                                    <div class='mt-2'>
                                        <BiCaretRight></BiCaretRight>
                                    </div>
                                    <div>
                                        Optimize applications for maximum speed
                                    </div>

                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;