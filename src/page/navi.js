import React from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';

const Navi = () => {
    const navigate = useNavigate(); 
    const goHome = () => {
      navigate("/"); // New line
    };
    return(
    <div class = "top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Portfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href = "#about" onClick={goHome}>Home</a>
                    <Link class="nav-link" to = "/also">About</Link>
                    <a class = "nav-link" href = "#projects" onClick={goHome}> Projects </a> 
                    <a class="nav-link" href="#resumes" tabindex="-1" onClick={goHome}>Resume</a>
                </div>
            </div>
        </div>
        </nav>
    </div>
    );
}
export default Navi;
