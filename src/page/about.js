import React from 'react';
import '../App.css';
import Navi from './navi';
import Footer from "./footer";
import Prog from '../images/programmer.jpg';
import GitHubCalendar from 'react-github-calendar';
import Carousel from './carousel';

const About = () => {
    return (
    <div>
    <Navi />
    <div id = "row1" class = "row">
        <div class = "col me">
            <h1>WELCOME.</h1>
            <p>I am Harshith Harijeevan, and I come from Bengaluru, the Silicon Valley of India! <br />
                A Web Developer by day, and an enthusiastic AI learner by night! &#128513;
            </p>
        </div>
        <div class = "col">
            <img src={Prog} alt="Logo"/>
        </div>
    </div>
    <Carousel />
    <div class = 'cont'><GitHubCalendar username="HarshithAlva6" /></div>
    <Footer />
    </div>
    );
}
export default About;