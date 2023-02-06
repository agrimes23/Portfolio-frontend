import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="footer fixed-bottom p-5 mb-5 text-center">
                    <a className="py-5" href="https://github.com/agrimes23"><i className="footer-text fa-brands fa-github text-white px-5" title="Github"></i></a>
                    <a className="py-5" href="https://www.linkedin.com/in/alex-grimes-dev/"><i className="footer-text fa-brands fa-linkedin text-white px-5" title="LinkedIn"></i></a>
                    <a className="py-5" href="mailto: alexgrimes23@gmail.com"><i className="footer-text fa-regular fa-envelope text-white px-5" title="Email"></i></a>
            </footer>
        
        </>
    )
}

export default Footer;