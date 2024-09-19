import React from 'react';
import coursera from '../images/Coursera.jpg';
import data from '../images/Data Science.jpg';
import dev from '../images/Dev.jpg';
import js from '../images/JavaScript.jpg';
import spring from '../images/Spring.jpg';
import tf from '../images/TensorFlow.jpg';

const Carousel = () => {
    return(
        <div>
            <div id="carouselExampleCaptions" class="carousel slide cert" data-bs-ride="false">
            <h1>Certifications</h1>
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src= {dev} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src= {coursera} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={js} alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={tf} alt="Fourth slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={spring} alt="Fifth Slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={data} alt="Sixth slide" />
                    </div>
                </div>
                
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>           
        </div>
    );
}
export default Carousel;