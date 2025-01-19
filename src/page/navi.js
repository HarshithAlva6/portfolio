import React from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faComputer, faFile, faHomeUser } from '@fortawesome/free-solid-svg-icons';
import TextRotator from '../helper/TextRotator';
import tar from '../images/tar.webp';

const Navi = () => {
    const navigate = useNavigate(); 
    const goHome = () => {
        navigate("/"); 
    };
    return(
        <>
            <a href="http://main--harshalva.netlify.app"><img src={tar} alt="Go to V1?" className = "fixed top-0 left-0 w-20 h-20 z-50"/></a>
            <TextRotator />
            <h2 className='my-heading2'>Welcome to my Space &#128513;</h2>
                <nav className="navbar">
                    <div className="navbar-nav space-y-4">
                        <a className="nav-link" aria-current="page" href="#home" onClick={goHome}>
                        <div className="flex items-center space-x-3">
                            <span className="w-6 flex justify-center">
                            <FontAwesomeIcon icon={faHomeUser} size="lg" />
                            </span>
                            <span className="text-lg font-bold">Home</span>
                        </div>
                        </a>
                        <a className="nav-link" href="#projects" onClick={goHome}>
                        <div className="flex items-center space-x-3">
                            <span className="w-6 flex justify-center">
                            <FontAwesomeIcon icon={faComputer} size="lg" />
                            </span>
                            <span className="text-lg font-bold">Experience</span>
                        </div>
                        </a>
                        <a className="nav-link" href="#carousel2" onClick={goHome}>
                        <div className="flex items-center space-x-3">
                            <span className="w-6 flex justify-center">
                            <FontAwesomeIcon icon={faAddressCard} size="lg" />
                            </span>
                            <span className="text-lg font-bold">Certified</span>
                        </div>
                        </a>
                        <a className="nav-link" href="#back" tabIndex="-1" onClick={goHome}>
                        <div className="flex items-center space-x-3">
                            <span className="w-6 flex justify-center">
                            <FontAwesomeIcon icon={faFile} size="lg" />
                            </span>
                            <span className="text-lg font-bold">Resume</span>
                        </div>
                        </a>
                    </div>
                </nav>
        </>
    );
};

export default Navi;
