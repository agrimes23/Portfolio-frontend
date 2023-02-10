import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import resumePDF from '../images/alex_grimes_pdf.pdf'


const Resume = () => {

    return (
      <>
        <div className="d-flex row">
          <div className="d-flex justify-content-center my-5">
            {/* Need to change to downloadable PDF. Need to figure out how to get the file on Heroku */}
            <a className ="btn btn-dwnld" href={"https://docs.google.com/document/d/1h752NdS5tEtRAi8J9yT1GeqaZDY4YQPa/edit?usp=sharing&ouid=109090623790882255992&rtpof=true&sd=true"}>Redirct to Google Docs to Download PDF</a>      
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