import React, {useRef, useState} from 'react';
import '../App.css';
import RotatingImage from '../components/rotatingimage';

const Info = () => {
    const videoRef = useRef(null); // Reference to the video element
    const [isPlaying, setIsPlaying] = useState(true); // Initial state set to auto-play

    const handleVideoClick = () => {
        if (isPlaying) {
            videoRef.current.pause(); // Pause if it's playing
        } else {
            videoRef.current.play(); // Play if it's paused
        }
        setIsPlaying(!isPlaying); // Toggle play/pause state
    };
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