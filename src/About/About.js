import React from 'react';
import about3 from '../assets/about/about3.png'
import { BsFillGeoAltFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
const About = () => {
    return (
        <div class='flex justify-between banner' id='aboutMe'>
            <div>
                <h2 class='text-5xl ml-10 mb-10 pt-10'>Reach Out to me!</h2>
                <p class='text-xl ml-10'>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
                <p class='text-xl font-bold ml-10 mt-5'>"20 | First Bangladeshi Google Code-In Finalist | MERN STACK DEVELOPER @Shakil | Still Finding 💭 "</p>
                <div class='flex'>
                    <div class='ml-10 mt-11 text-lg'>
                        <BsFillGeoAltFill>
                        </BsFillGeoAltFill>
                    </div>
                    <div class='mt-9 ml-4 text-xl leading-8'>
                        <h1>Dhaka, Bangladesh</h1>
                        <h1>Open for opportunities: Yes</h1>
                        <div class='flex justify-between gap-12 text-3xl mt-12 pb-10'>
                            <a href="https://github.com/DevWithShakil" ><BsGithub ></BsGithub></a>
                            <a href="https://www.linkedin.com/in/md-shakil-khan-767700241/"> <BsLinkedin></BsLinkedin></a>
                            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent/KtbxLvgxDckpKqptbJXDFWWrFGGCbWcrZg?compose=new"><FaEnvelope></FaEnvelope></a>
                            <a href="https://www.facebook.com/m.khanshakil07/"> <FaFacebook></FaFacebook></a>
                            <a href="https://www.instagram.com/md__shakil__khan/"><FaInstagram></FaInstagram></a>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <img class='w-80 mt-10 mr-7' src={about3} alt="" />
            </div>
        </div>
    );
};

export default About;