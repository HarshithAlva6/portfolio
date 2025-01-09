import React, {useState, useEffect} from 'react';
import resumeFile from '../cv/HarshithH_Resume.pdf';
import "../App.css";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Resume = () => {
    const [scale, setScale] = useState(1);

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
            <div className="w-1/2 flex justify-center items-center">
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