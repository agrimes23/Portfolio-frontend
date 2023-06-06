import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import Footer from './Footer.js'


const HomePage = () => {


    useEffect (() => {
        window.scroll(0,0)
    })

    return (
        <>
            <div className="style-border">
                <div id="intro_section" className="main-intro row text-center mx-auto d-flex justify-content-center align-items-center">
                        <h1 className="main-title row justify-content-center">Alex Grimes</h1>
                        <h2 className="description-title">Full-Stack Developer | Web Developer</h2>
                </div>
            </div>

            <div className="projects-hp d-flex justify-content-center align-items-center m-auto">
                <Link className="text-decoration-none text-white" to="/projects"><h2 className="projects-title-hp d-flex align-items-center p-5">View Alex's Coding Projects</h2></Link>
            </div>

            <div className="exp-abtme-container mb-5">
                <div className="exp-conatiner-hp m-auto mx-3">
                    <Link className="text-decoration-none text-white" to="/experience">
                        <div className="experience-hp d-flex justify-content-center align-items-center p-3">
                            <h2 className="experience-title-hp">Read about how Alex became a Programmer and Other Experiences</h2>
                        </div> 
                    </Link>
                </div>
                <div className="exp-conatiner-hp m-auto mx-3">
                    <Link className="text-decoration-none text-black" to="/aboutme">
                        <div className="about-me-hp d-flex justify-content-center align-items-center p-3">
                            <h2 className="about-me-title-hp">Still Curious? Read the About Me Page!</h2>
                        </div> 
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    )

}

export default HomePage;