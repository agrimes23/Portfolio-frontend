import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'


const HomePage = () => {

    return (
        <>
            <div className="style-border">
                <div id="intro_section" className="main-intro text-center m-auto">
                        <h1 className="main-title">Alex Grimes</h1>
                        <h2 className="description-title">Frontend Developer | Web Developer</h2>
                </div>
            </div>

            <div className="projects-hp d-flex justify-content-center align-items-center">
                <Link className="text-decoration-none text-white" to="/projects"><h2 className="rounded projects-title-hp d-flex align-items-center p-5">View Alex's Coding Projects</h2></Link>
            </div>
            
            <div className="experience-hp d-flex justify-content-center align-items-center">
                <Link className="text-decoration-none text-white"><h2 className="experience-title-hp">Read about how Alex became a Programmer and Other Experiences</h2></Link>
            </div> 
            <div className="about-me-hp d-flex justify-content-center align-items-center">
                <Link className="text-decoration-none text-black"><h2 className="about-me-title-hp">Still Curious? Read the About Me Page!</h2></Link>
            </div> 

        </>
    )

}

export default HomePage;