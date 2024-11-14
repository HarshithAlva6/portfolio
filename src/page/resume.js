import React from 'react';
import resumeFile from '../cv/Harshith_H_CV.pdf';
import "../App.css";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Resume = () => {
    return (
        <div id = "back">
            <Document file={resumeFile} id='resumes'>
                <Page renderTextLayer={false}
                    renderAnnotationLayer={false}
                    customTextRenderer={false}
                    pageNumber={1} />
            </Document>
        </div>
    );
}
export default Resume;