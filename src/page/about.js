import React from 'react';
import '../App.css';
import Footer from "./footer";
import Prog from '../images/programmer.jpg';
import GitHubCalendar from 'react-github-calendar';
import Carousel from './carousel';

const About = () => {
    return (
    <div className = "whiten">
    <div id = "about">
        <div class = "col-sm-6">
            <img src={Prog} alt="Logo"/>
        </div>
        <div class = "col-sm-6 me">
        <h2 className = "my-heading">Still here?</h2>
        </div>
    </div>
    <Carousel />
    <div class = 'cont'>
        <h2 className = "text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">GitHub Contributions</h2>
        <GitHubCalendar username="HarshithAlva6" /></div>
    </div>
    );
}
export default About;