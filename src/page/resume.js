import React, { useState, useEffect } from 'react';
import resumeFile from '../cv/Harshith_Resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import { saveAs } from "file-saver";
import { FaDownload } from "react-icons/fa6";
import "../App.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageWidth, setPageWidth] = useState(400);

    useEffect(() => {
        const updatePageWidth = () => {
            const viewportWidth = window.innerWidth;
            if (viewportWidth < 640) {
                setPageWidth(viewportWidth * 0.75);
            } else {
                setPageWidth(400);
            }
        };

        updatePageWidth();
        window.addEventListener('resize', updatePageWidth);
        return () => window.removeEventListener('resize', updatePageWidth);
    }, []);

    const handleDownload = () => {
        saveAs(resumeFile, "Harshith_Resume.pdf");
    };

    return (
        <div id="back" className="flex min-h-screen"> 
            <div className="w-1/2 bg-gray-100 hidden sm:block"></div>
            <div className="w-1/2 flex flex-col justify-center items-center sm:mx-4">
                <button onClick={handleDownload} className="mb-10 gap-2 text-white flex flex-row">
                    Download PDF <FaDownload size={24}/>
                </button>
                <div className="p-4 rounded-lg shadow-lg bg-white">
                    <Document file={resumeFile} onLoadSuccess={({ numPages }) => setNumPages(numPages)} className="flex justify-center">
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} width={pageWidth} renderTextLayer={false} renderAnnotationLayer={false} />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
};

export default Resume;
