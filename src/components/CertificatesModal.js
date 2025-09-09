import React from 'react';


// Default certificate images (for About page or fallback)
import dev from '../assets/images/Dev.jpg';
import coursera from '../assets/images/Coursera.jpg';
import js from '../assets/images/JavaScript.jpg';
import tf from '../assets/images/TensorFlow.jpg';
import spring from '../assets/images/Spring.jpg';
import data from '../assets/images/Data Science.jpg';
const defaultCertificateImages = [dev, coursera, js, tf, spring, data];

const CertificatesModal = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;
  const displayImages = images && images.length > 0 ? images : defaultCertificateImages;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm transition-all duration-300">
      <div className="bg-white rounded-lg max-w-3xl w-full relative flex flex-col max-h-[90vh] overflow-y-auto shadow-2xl animate-modal-fade-in">
        <button
          className="sticky top-2 right-2 self-end text-2xl font-bold text-gray-700 hover:text-red-500 z-10 bg-white rounded-full p-1"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="my-heading mb-4">All Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {displayImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Certificate ${idx + 1}`}
              className="w-full h-48 object-contain rounded shadow"
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes modal-fade-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-modal-fade-in {
          animation: modal-fade-in 0.35s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
};

export default CertificatesModal;
