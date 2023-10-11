import React from 'react';
import '../App.css';
import Navi from './navi';
import Footer from "./footer";
import Prog from '../images/programmer.jpg';

const About = () => {
    return (
    <div>
    <Navi />
    <div id = "first">
        <div id = "second">
            <h1>Harshith Harijeevan</h1>
            <p>A Web Developer who is passionate about AI and more!</p>
        </div>
    <img src={Prog} alt="Logo" className='about'/>
    </div>
    <Footer />
    </div>
    );
}
export default About;