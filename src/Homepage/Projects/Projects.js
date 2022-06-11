import React from 'react';
import project2 from '../../assets/logo/project2.png'
import project3 from '../../assets/logo/project3.png'
import project4 from '../../assets/logo/project4.png'
import './project.css'

const Projects = () => {
    return (
        <div class='bg-[#CDF0EA]'>
            <h2 class='text-4xl ml-10 mb-10 pt-10'>PROJECTS</h2>
            <div class='flex justify-around'>
                <div class="card w-96 bg-slate-200 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={project2} alt="Project" class="rounded-xl project w-full h-36" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title justify-center text-2xl font-bold uppercase">Developer Portfolio</h2>
                        <div class="card-actions gap-10 pt-5">
                            <a href={"https://developer-portfolio-bf364.web.app/"} target="_blank" rel="noopener noreferrer" download className='btn btn-primary'> LIVE DEMO</a>

                            <div>
                                <label for="my-modal-6" class="btn modal-button btn-primary">DETAILS</label>

                                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                <div class="modal modal-bottom sm:modal-middle">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                        <div class="modal-action">
                                            <label for="my-modal-6" class="btn">Yay!</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-slate-200 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={project3} alt="Project" class="rounded-xl project w-full h-36" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title justify-center text-2xl font-bold">WHEELS BD</h2>
                        <div class="card-actions gap-10 pt-5">
                            <a href={"https://wheels-bd.web.app/"} target="_blank" rel="noopener noreferrer" download className='btn btn-primary'> LIVE DEMO</a>
                            <button class="btn btn-primary">DETAILS</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-slate-200 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={project4} alt="Project" class="rounded-xl project w-full h-36" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title justify-center text-2xl font-bold">GEAR UP</h2>
                        <div class="card-actions gap-10 pt-5">
                            <a href={"https://asignment-10.web.app/"} target="_blank" rel="noopener noreferrer" download className='btn btn-primary'> LIVE DEMO</a>
                            <button class="btn btn-primary">DETAILS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;