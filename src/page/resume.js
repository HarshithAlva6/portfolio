import React from 'react';
import resumeFile from '../cv/Harshith H - CV.pdf';
import "../App.css";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const resume = () => {
    //const navigationHeight = document.querySelector('.top').offsetHeight;
    //document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 1 + "px");
    return (
        <div id = "back">
        <div id = "resumes">
            <Document file={resumeFile}>
                <Page renderTextLayer={false}
                    renderAnnotationLayer={false}
                    customTextRenderer={false}
                    pageNumber={1} />
            </Document>
        </div>
        </div>
    );
}
export default resume;