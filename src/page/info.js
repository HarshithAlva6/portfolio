import React from 'react';
import '../App.css';
import RotatingImage from '../components/rotatingimage';

const Info = () => {
    return (
    <div id = "about">
        <div class="info">
            <h1>Harshith Harijeevan</h1>
            <p>A Web Developer who is passionate about the world of AI. &#128513;</p>
            <a href="http://portfolioV2--harshalva.netlify.app" target="_blank">
            <RotatingImage /></a>
        </div>
    </div>
    );
}
export default Info;