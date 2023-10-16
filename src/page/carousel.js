import React from 'react';
import car from '../images/Coursera.jpg';

const Carousel = () => {
    return(
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src= {car} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Third slide" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Carousel;