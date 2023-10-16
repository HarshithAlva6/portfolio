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
        <div class = "col">
            <h1>Harshith Harijeevan</h1>
            <p>A Web Developer who is passionate about AI and more!</p>
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