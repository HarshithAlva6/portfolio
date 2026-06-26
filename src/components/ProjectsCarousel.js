import React from 'react';
import { FaGithub, FaDoorOpen } from "react-icons/fa";
import { liveProjects } from '../data/liveProjects';

const Carousel = () => {
    return(
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {liveProjects.map((proj) => (
    <div key={proj.projectUrl} className="flex flex-col sm:flex-row glass-effect w-full max-w-full rounded-lg overflow-hidden mb-4 shadow-lg">
        <div className="flex flex-col flex-none w-full sm:w-2/5">
            <a href={proj.projectUrl} target="_blank" rel="noopener noreferrer">
                {proj.imageUrl ? (
                    <img className="h-40 w-full object-contain sm:object-cover bg-black" src={proj.imageUrl} alt={proj.title} />
                ) : (
                    <div className="h-40 bg-gray-300 flex items-center justify-center">Loading...</div>
                )}
            </a>
            <div className="flex flex-row justify-center mt-3 gap-8">
                <a href={proj.git} target="_blank" rel="noopener noreferrer" aria-label={`${proj.title} source code on GitHub`}><FaGithub size={36}/></a>
                <a href={proj.projectUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${proj.title} live`}><FaDoorOpen size={36}/></a>
            </div>
        </div>
        <div className="flex flex-col sm:w-3/5 break-words max-w-full px-4 sm:items-start">
            <h2 className="text-lg font-bold break-words text-center w-full pt-2 sm:pt-0">{proj.title}</h2>
            <p className="mt-2 text-sm break-words whitespace-pre-line max-w-full text-center sm:text-center text-justify">{proj.desc}</p>
        </div>
    </div>
    ))}
    </div>
    );
}
export default Carousel;