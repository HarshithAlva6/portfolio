import React from 'react';
import '../App.css';
import wow from '../images/danske.png';
import xcel from '../images/xcelerator.jpg';

const Projects = () => {
    return (
    <div id = "projects">
    <header className="projects">
    <div class="card">
        <img src = {wow} class="card-img-top" alt="Danske IT"></img>
        <div class="card-body">
            <h5 class="card-title">Danske IT</h5>
            <p class="card-text">Fulfilled hands-on training to create 2 projects on COBOL and PL/I, which comprise the legacy systems. This is a part of Danica Pension's injury and customer systems.</p>
            <a href="https://danskebank.com/groupit" class="btn btn-primary">Refer</a>
        </div>
    </div>
    <div class="card">
        <img src={wow} class="card-img-top" alt="Danske IT"></img>
        <div class="card-body">
            <h5 class="card-title">Danske IT</h5>
            <p class="card-text">Implemented front-end as part of a pilot project. Switching from 40% of the legacy systems which used
Gemini and COBOL to the newest decentralized ones like ReactJS and cloud servers.</p>
            <a href="https://danskebank.com/groupit" class="btn btn-primary">Refer</a>
        </div>
    </div>
    <div class="card">
        <img src={xcel} class="card-img-top" alt="Xcelerator"></img>
        <div class="card-body">
            <h5 class="card-title">Xcelerator</h5>
            <p class="card-text"> Procure, expand, and dispense engaging content for students to get real-world context about what they learn on a daily basis. Generate 1 pager notes, which also strengthened the knowledge of the domain</p>
            <a href="https://xcelerator.ninja/" class="btn btn-primary">Refer</a>
        </div>
    </div>
    </header>
    </div>
    );
}
export default Projects;