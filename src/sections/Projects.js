import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/App.css';
import Carousel2 from '../components/CertificatesCarousel';
import CertificatesModal from '../components/CertificatesModal';
import { experience as items } from '../data/experience';
import { projectGallery, certificateGallery } from '../data/galleries';

const projectImages = projectGallery;
const certificateImages = certificateGallery;

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [showCertificatesModal, setShowCertificatesModal] = useState(false);
  const [selectedToggle, setSelectedToggle] = useState('projects');

  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  // When View All is selected, open modal automatically
  React.useEffect(() => {
    if (selectedToggle === 'viewall') {
      setShowCertificatesModal(true);
    }
  }, [selectedToggle]);

  // Determine which images to show in modal
  let modalImages = [];
  if (selectedToggle === 'projects') modalImages = projectImages;
  else if (selectedToggle === 'certificates') modalImages = certificateImages;
  else if (selectedToggle === 'viewall') modalImages = [...projectImages, ...certificateImages];

  return (
    <div id="projects">
      <h2 className = "my-heading md:ml-50p pt-5">Work Experience</h2>
      <header className="projects md:ml-50p">
        {items.map(item => (
          <motion.div 
            className="card cursor-pointer glass-effect !bg-transparent text-white"
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: selectedId ? (selectedId === item.id ? 1 : 0.5) : 1,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.8)",
              background: "rgba(255, 255, 255, 0.1)", 
            }}
            style={selectedId === item.id ? { zIndex: 10 } : { zIndex: 1 }}
          >
              <motion.img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{truncateText(item.description, 100)}</p>
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
            event.stopPropagation(); 
            setSelectedId(null); 
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
              <div>
                <ul className="flex flex-wrap justify-center gap-4 p-2">
                {items.find(item => item.id === selectedId).skills.map(skill => (
                    <li key={skill} onClick={(event) => {
                      event.stopPropagation();
                      }} className="px-4 py-2 flex items-center rounded-full border border-black-300 bg-gray-200 text-black hover:bg-gray-300 hover:shadow-lg transition-all">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Carousel2
        selectedToggle={selectedToggle}
        onToggleChange={setSelectedToggle}
        onShowCertificates={() => setShowCertificatesModal(true)}
      />
      <CertificatesModal
        isOpen={showCertificatesModal}
        onClose={() => {
          setShowCertificatesModal(false);
          if (selectedToggle === 'viewall') setSelectedToggle('projects');
        }}
        images={modalImages}
      />
    </div>
  );
};

export default Projects;
