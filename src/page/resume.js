import React, {useState, useEffect} from 'react';
import resumeFile from '../cv/Harshith_H_Resume.pdf';
import "../App.css";
import { Document, Page, pdfjs } from 'react-pdf';
import { saveAs } from "file-saver";
import { FaDownload } from "react-icons/fa6";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Resume = () => {
    const [scale, setScale] = useState(1);
    const handleDownload = () => {
        saveAs(resumeFile, "Harshith_H_Resume.pdf");
      };
    useEffect(() => {
        const updateScale = () => {
            const viewportWidth = window.innerWidth;
            if (viewportWidth < 768) {
                setScale(0.5); // Slightly larger for tablets
            } else {
                setScale(1); // Default for desktop
            }
        };
        updateScale();
        window.addEventListener('resize', updateScale);

        return () => window.removeEventListener('resize', updateScale);
    }, []);
    return (
        <div id = "back" className="flex min-h-screen"> 
            <div className="w-1/2 bg-gray-100 hidden sm:block">
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
            <button onClick={handleDownload} class="mb-10 gap-2 text-white flex flex-row">
                Download PDF <FaDownload size={24}/>
            </button>
            <Document file={resumeFile} id='resumes'>
                <Page renderTextLayer={false}
                    renderAnnotationLayer={false}
                    customTextRenderer={false}
                    pageNumber={1} scale={scale} />
            </Document>
            </div>
        </div>
    );
}
export default Resume;