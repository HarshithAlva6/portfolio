import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../App.css';
import wow from '../images/danske.png';
import xcel from '../images/xcelerator.jpg';
import Mind from '../images/MindKind.jpg';
import Carousel2 from './carousel2';

const items = [
  {
    id: 1,
    title: 'Danske IT (Mainframes)',
    subtitle: 'COBOL and PL/I projects',
    description: 'Fulfilled hands-on training to create 2 projects on COBOL and PL/I, which comprise the legacy systems. This is a part of Danica Pensions injury and customer systems.',
    image: wow,
    link: 'https://danskebank.com/groupit'
  },
  {
    id: 2,
    title: 'Danske IT (MERN Stack)',
    subtitle: 'Front-end Development',
    description: 'Implemented front-end as part of a pilot project. Switching from 40% of the legacy systems which used Gemini and COBOL to the newest decentralized ones like ReactJS and cloud servers.',
    image: wow,
    link: 'https://danskebank.com/groupit'
  },
  {
    id: 3,
    title: 'Xcelerator',
    subtitle: 'Educational Content',
    description: 'Procure, expand, and dispense engaging content for students to get real-world context about what they learn on a daily basis. Generate 1 pager notes, which also strengthened the knowledge of the domain',
    image: xcel,
    link: 'https://xcelerator.ninja/'
  },
  {
    id: 4,
    title: 'MindKind',
    subtitle: 'Local Business Connection',
    description: 'MindKind connects local businesses with people who want to experience their community. It is the social platform people use to access daily deals and events in the community.',
    image: Mind,
    link: 'https://mindkind.life/'
  }
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div id="projects">
      <h2>Projects</h2>
      <header className="projects">
        {items.map(item => (
          <motion.div 
            className="card"
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedId ? (selectedId === item.id ? 1 : 0.5) : 1 }}
            style={selectedId === item.id ? { zIndex: 10 } : { zIndex: 1 }}
          >
              <motion.img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
          </motion.div>
        ))}
      </header>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="card selected-card"
            initial={{ scale: 0.9, opacity: 0, y: "100vh" }}
            animate={{ scale: 1, opacity: 1, y:0}}
            exit={{ scale: 0.9, opacity: 0, y: "100vh" }}
            style={{
                position: 'fixed',
                top: '25%',
                left: '25%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1000,
                backgroundColor: 'white',
                boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)',
                width: '50%'
              }}
              onClick={() => window.open(items.find(item => item.id === selectedId).link, "_blank")}
          >
            <button
            onClick={(event) => {
            event.stopPropagation(); // Prevent the click from going to the card
            setSelectedId(null); // Close modal
            }}
            style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'opaque',
            fontSize: '1.5rem',
            cursor: 'pointer',
            zIndex: 1001,
            height: 'auto'
            }}
        >
          &times; {/* "X" character */}
        </button>
            <motion.img
              src={items.find(item => item.id === selectedId).image}
              alt={items.find(item => item.id === selectedId).title}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                {items.find(item => item.id === selectedId).title}
              </h5>
              <p className="card-text">
                {items.find(item => item.id === selectedId).description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Carousel2 />
    </div>
  );
};

export default Projects;
