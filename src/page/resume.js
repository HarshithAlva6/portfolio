import React, {useState, useEffect} from 'react';
import resumeFile from '../cv/Harshith_H_CV.pdf';
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
        <div id = "back">
            <Document file={resumeFile} id='resumes' className='block mx-[25vw] md:ml-[50vw]'>
                <Page renderTextLayer={false}
                    renderAnnotationLayer={false}
                    customTextRenderer={false}
                    pageNumber={1} scale={scale} />
            </Document>
        </div>
    );
}
export default Resume;