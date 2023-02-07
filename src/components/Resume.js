import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'

import { Document, Page } from 'react-pdf';
import resumePDF from './images/alex_grimes_pdf.pdf'


const Resume = () => {
    return (
        <>
            <Document file={resumePDF}>
                <Page pageNumber={1} />
            </Document>
        </>
    )
}

export default Resume;