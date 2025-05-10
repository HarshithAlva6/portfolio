import React, { useState } from 'react';
import dyn from '../images/coursera/dyn.jpg';
import jen from '../images/coursera/jen.jpg';
import mdb from '../images/coursera/mdb.jpg';
import njs from '../images/coursera/njs.jpg';
import sbh2 from '../images/coursera/sbh2.jpg';
import sel from '../images/coursera/sel.jpg';
import wpk from '../images/coursera/wbk.jpg';
import coursera from '../images/Coursera.jpg';
import data from '../images/Data Science.jpg';
import dev from '../images/Dev.jpg';
import js from '../images/JavaScript.jpg';
import spring from '../images/Spring.jpg';
import tf from '../images/TensorFlow.jpg';
import sd from '../images/SDA.png';

const Carousel2 = () => {
    const [showProjects, setShowProjects] = useState(true);

    return (
        <div id="carousel" className="md:ml-50p">
            {showProjects && (
                <div id="carousel1">
                    <h3 className="my-heading">Projects</h3>
                    <div id="carouselExampleCaptions2" className="carousel slide cert" data-bs-ride="false">
                        <div className="carousel-inner">
                            {[dyn, jen, mdb, njs, sbh2, sel, wpk,sd].map((img, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img className="d-block w-100" src={img} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            )}

            {!showProjects && (
                <div id="carousel2">
                    <h2 className="my-heading">Certificates</h2>
                    <div id="carouselExampleCaptions1" className="carousel slide cert" data-bs-ride="false">
                        <div className="carousel-inner">
                            {[dev, coursera, js, tf, spring, data].map((img, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img className="d-block w-100" src={img} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            )}
        <div className="flex justify-center py-4">
            <div 
                className="flex items-center cursor-pointer w-50 p-1 bg-gray-300 rounded-full"
                onClick={() => setShowProjects(!showProjects)}
            >
                <div 
                    className={`w-1/2 text-center py-1 rounded-full transition-all ${
                        showProjects ? "bg-teal-500 text-white" : "bg-gray-300 text-black"
                    }`}
                >
                    Projects
                </div>
                <div 
                    className={`w-1/2 text-center py-1 rounded-full transition-all ${
                        !showProjects ? "bg-teal-500 text-white" : "bg-gray-300 text-black"
                    }`}
                >
                    Certificates
                </div>
            </div>
        </div>

        </div>
    );
};

export default Carousel2;
