import React from 'react';
import resumeFile from '../cv/Harshith Harijeevan - Resume.pdf';
import "../App.css";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const resume = () => {
    return (
        <div id = "resumes">
            <Document file={resumeFile}>
                <Page renderTextLayer={false}
                    renderAnnotationLayer={false}
                    customTextRenderer={false}
                    pageNumber={1} />
            </Document>
        </div>
    );
}
export default resume;