import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import resumePDF from '../images/alex_grimes_pdf.pdf'


const Resume = () => {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(resumePDF).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = resumePDF;
            alink.click();
        })
    })
}
    return (
      <>
        <div className="d-flex row">
          <div className="d-flex justify-content-center my-5">
            <button className ="btn btn-dwnld" onClick={onButtonClick}>Download Resume</button>      
          </div>
          <div className="d-flex justify-content-center">
            <Document file={resumePDF}>
                <Page pageNumber={1} />
            </Document>
          </div>
        </div>
      </>
    )
  }

export default Resume;