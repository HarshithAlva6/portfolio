// src/components/RotatingPortal.js
import React from 'react';
import { motion } from 'framer-motion';
import portal from '../images/strange.png'; // Update with the actual path to your image

function RotatingImage() {
    return (
        <motion.img
            src={portal}
            alt="Doctor Strange Portal"
            style={{
                marginTop: '30px',
                width: '200px', 
                height: '200px', 
            }}
            whileHover={{ scale: 1.3 }} 
            animate={{ rotate: 360 }}
            transition={{
                rotate: {
                    repeat: Infinity, // Infinite rotation
                    duration: 2, // Rotation speed
                    ease: 'linear' // Smooth rotation
                },
                scale:  {                   
                    type: 'tween', // Smooth scaling without bounce
                    duration: 0.3, // Adjust for faster/slower scaling
                    ease: 'easeInOut' // Smooth in and out effect
                }
            }}

        />
    );
}

export default RotatingImage;
