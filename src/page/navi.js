import React from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faAddressCard, faComputer, faFile } from '@fortawesome/free-solid-svg-icons';
import TextRotator from '../helper/TextRotator';

const Navi = () => {
    const navigate = useNavigate(); 
    const goHome = () => {
        navigate("/"); 
    };
    return(
        <>
            <TextRotator />
            <h2 className='my-heading2'>Welcome to my Space &#128513;</h2>
                <nav className="navbar navbar-light">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="#home" onClick={goHome}>
                            <FontAwesomeIcon icon={faHouseUser} size="lg" /> Home
                        </a>
                        <a className="nav-link" href="#projects" onClick={goHome}>
                            <FontAwesomeIcon icon={faComputer} size="lg" /> Experience
                        </a>
                        <a className="nav-link" href="#carousel2" onClick={goHome}>
                            <FontAwesomeIcon icon={faAddressCard} size="lg" /> Certified
                        </a>
                        <a className="nav-link" href="#back" tabIndex="-1" onClick={goHome}>
                            <FontAwesomeIcon icon={faFile} size="lg" /> Resume
                        </a>
                    </div>
                </nav>
        </>
    );
};

export default Navi;
