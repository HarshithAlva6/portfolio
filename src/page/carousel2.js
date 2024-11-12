import React from 'react';
import dyn from '../images/coursera/dyn.jpg';
import jen from '../images/coursera/jen.jpg';
import mdb from '../images/coursera/mdb.jpg';
import njs from '../images/coursera/njs.jpg';
import sbh2 from '../images/coursera/sbh2.jpg';
import sel from '../images/coursera/sel.jpg';
import wpk from '../images/coursera/wbk.jpg';

const Carousel2 = () => {
    return(
        <div id="carousel2">
            <div id="carouselExampleCaptions2" class="carousel slide cert" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src= {dyn} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src= {jen} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={mdb} alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={njs} alt="Fourth slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={sbh2} alt="Fifth Slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={sel} alt="Sixth slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={wpk} alt="Seventh slide" />
                    </div>
                </div>
                
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>           
        </div>
    );
}
export default Carousel2;