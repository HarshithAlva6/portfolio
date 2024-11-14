import React from 'react';
import '../App.css';
import Prog from '../images/programmer.jpg';
import GitHubCalendar from 'react-github-calendar';
import Carousel from './carousel';
import js from '../images/skill/js.webp';
import py from '../images/skill/python.png';
import html from '../images/skill/html.png';
import react from '../images/skill/react.webp';
import next from '../images/skill/next.png';
import java from '../images/skill/java.png';
import tail from '../images/skill/tail.png';
import spring from '../images/skill/spring.png';
import php from '../images/skill/php.png';
import sql from '../images/skill/sql.png';
import node from '../images/skill/node.webp';
import mongo from '../images/skill/mongo.png';
import css from '../images/skill/css.png';
import c from '../images/skill/c.png';
import graph from '../images/skill/graphQL.png';


const skillImages = [
    py, js, html, css,
    react, next, node, tail,
    java, spring, c, mongo,
    php, graph, sql
];

const About = () => {
    return (
    <div className = "whiten">
    <div id = "about">
        <div class = "col-sm-6">
            <img src={Prog} alt="Logo"/>
        </div>
        <div class = "w-full mx-10 me">
            <div class = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center items-center w-full pt-5">
            {skillImages.map((image, index) => (
                        <img key={index} src={image} alt={`Skill ${index + 1}`} className="w-30 h-30"/>
            ))}
            </div>
        </div>
    </div>
    <Carousel />
    <div class = 'cont'>
        <h2 className = "head">GitHub Contributions</h2>
        <GitHubCalendar username="HarshithAlva6" /></div>
    </div>
    );
}
export default About;