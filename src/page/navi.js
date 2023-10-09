import React from 'react';
import '../App.css';

const Navi = () => {
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
                    <a class="nav-link active" aria-current="page">Home</a>
                    <a class="nav-link" href = "#about">About</a>
                    <a class = "nav-link" href = "#projects" > Projects </a> 
                    <a class="nav-link" href="#" tabindex="-1">Resume</a>
                </div>
            </div>
        </div>
        </nav>
    </div>
    );
}
export default Navi;
