import React from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faAddressCard, faComputer, faFile} from '@fortawesome/free-solid-svg-icons';

const Navi = () => {
    const navigate = useNavigate(); 
    const goHome = () => {
      navigate("/"); // New line
    };
    return(
    <div class = "top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#about">Harshith Harijeevan</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href = "#about" onClick={goHome}><FontAwesomeIcon icon={faHouseUser} size="md" /> Home</a>
                    <Link class="nav-link" to = "/also"><FontAwesomeIcon icon={faAddressCard} style={{color: "#000000",}} /> About</Link>
                    <a class = "nav-link" href = "#projects" onClick={goHome}> <FontAwesomeIcon icon={faComputer} style={{color: "#000000"}} /> Projects </a> 
                    <a class="nav-link" href="#back" tabindex="-1" onClick={goHome}><FontAwesomeIcon icon={faFile} style={{color: "#000000"}} /> Resume</a>
                </div>
            </div>
        </div>
        </nav>
    </div>
    );
}
export default Navi;
