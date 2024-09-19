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
        <div class = "col-sm-6 me">
            <h1>WELCOME.</h1>
            <p>I am <strong>Harshith Harijeevan</strong>, and I come from <b>Bengaluru</b>, the Silicon Valley of India! <br />
                A <i>Web Developer</i> by day, and an enthusiastic learner by night! &#128513; <br />
                Currently having completed my Masters in <i>Computer Science</i> <br />
                at California State University, Fullerton.
            </p>
        </div>
        <div class = "col-sm-6">
            <img src={Prog} alt="Logo"/>
        </div>
    </div>
    <Carousel />
    <div class = 'cont'>
        <h1>GitHub Contributions</h1>
        <GitHubCalendar username="HarshithAlva6" /></div>
    <Footer />
    </div>
    );
}
export default About;