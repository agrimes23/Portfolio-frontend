import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="footer fixed-bottom p-5 my-5 text-center">
                    <a href="https://github.com/agrimes23"><i className="fa-brands fa-github text-white px-5" title="Github"></i></a>
                    <a href="https://www.linkedin.com/in/alex-grimes-dev/"><i className="fa-brands fa-linkedin text-white px-5" title="LinkedIn"></i></a>
                    <a href=""><i className="fa-regular fa-envelope text-white px-5" title="Email"></i></a>
            </footer>
        
        </>
    )
}

export default Footer;