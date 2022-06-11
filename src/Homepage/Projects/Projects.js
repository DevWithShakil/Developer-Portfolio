import { CardGroup, Card } from 'react-bootstrap';
import project1 from '../../assets/modal/project1.png'
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

                            {/* modal */}

                            <label for="my-modal-5" class="btn modal-button btn-primary">DETAILS</label>

                            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box w-full h-full ">
                                    <h2 class="card-title justify-center text-2xl font-bold uppercase mb-5">Developer Portfolio</h2>
                                    <CardGroup class='flex'>
                                        <Card>
                                            <Card.Img variant="top" src={project1} />
                                            <Card.Body>
                                                <Card.Title>Features</Card.Title>
                                                <Card.Text>
                                                    <ul class='text-left'>
                                                        <li>1. It's a Portfolio Website</li>
                                                        <li>2. Using HTML5, Vanilla CSS</li>
                                                        <li>3. Using Language JavaScript</li>
                                                        <li>4. Using ReactJs</li>
                                                    </ul>
                                                </Card.Text>
                                            </Card.Body>
                                            <div class='flex justify-around'>
                                                <div>
                                                    <a href={"https://developer-portfolio-bf364.web.app/"} target="_blank" rel="noopener noreferrer" download className='btn btn-primary'> LIVE DEMO</a>
                                                </div>
                                                <div>
                                                    <a href={"https://developer-portfolio-bf364.web.app/"} target="_blank" rel="noopener noreferrer" download className='btn btn-primary'>SOURCE CODE</a>
                                                </div>
                                            </div>
                                        </Card>
                                    </CardGroup>
                                    <div class="modal-action">
                                        <label for="my-modal-5" class="btn">Yay!</label>
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