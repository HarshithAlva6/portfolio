import React from 'react';
import { projectGallery, certificateCarousel } from '../data/galleries';

const Carousel2 = ({ onShowCertificates, selectedToggle, onToggleChange }) => {
    return (
        <div id="carousel" className="md:ml-50p">
            {selectedToggle === 'projects' && (
                <div id="carousel1">
                    <h3 className="my-heading">Projects</h3>
                    <div id="carouselExampleCaptions2" className="carousel slide cert" data-bs-ride="false">
                        <div className="carousel-inner">
                            {projectGallery.map((img, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img className="d-block w-100" src={img} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            )}

            {selectedToggle === 'certificates' && (
                <div id="carousel2">
                    <h2 className="my-heading">Certificates</h2>
                    <div id="carouselExampleCaptions1" className="carousel slide cert" data-bs-ride="false">
                        <div className="carousel-inner">
                            {certificateCarousel.map((img, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img className="d-block w-100" src={img} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            )}

            {/* No carousel for View All, just the button */}

            <div className="flex flex-col items-center py-4 gap-4">
                <div className="flex items-center cursor-pointer w-auto p-1 bg-gray-300 rounded-full">
                    {['projects', 'certificates', 'viewall'].map((key) => (
                        <div
                            key={key}
                            className={`w-32 text-center py-1 rounded-full transition-all mx-1 ${
                                selectedToggle === key ? 'bg-teal-500 text-white' : 'bg-gray-300 text-black'
                            }`}
                            onClick={() => {
                                onToggleChange(key);
                                if (key === 'viewall' && typeof onShowCertificates === 'function') {
                                    onShowCertificates();
                                }
                            }}
                        >
                            {key === 'projects' ? 'Projects' : key === 'certificates' ? 'Certificates' : 'View All'}
                        </div>
                    ))}
                </div>
                {/* Removed old View All Certificates button. Only toggle remains. */}
            </div>
        </div>
    );
};

export default Carousel2;
