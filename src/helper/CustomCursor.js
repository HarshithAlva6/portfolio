import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: `${position.x - 300}px`, 
        top: `${position.y - 300}px`,
        width: "600px", 
        height: "600px",
        pointerEvents: "none",
        zIndex: 9999,
        background: `
          radial-gradient(
            circle,
            rgba(255, 255, 255, 0.5) 0%,    
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.01) 75%,
            rgba(255, 255, 255, 0) 100%     
          )
        `,
        borderRadius: "50%",
        transition: "transform 0.05s ease-out", // Smooth motion
        mixBlendMode: "soft-light",
      }}
    ></div>
  );
};

export default CustomCursor;
