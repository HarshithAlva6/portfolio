import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TextRotator = () => {
  const texts = ["Software Engineer", "Application Developer", "UI/UX Designer"];
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % texts.length);
      setCurrentText(texts[(index + 1) % texts.length]);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [texts, index]);

  return (
    <motion.h1
      className='my-heading'
      key={currentText} // Ensure animation plays on text change
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Animation duration
    >
      {currentText}
    </motion.h1>
  );
};

export default TextRotator;
