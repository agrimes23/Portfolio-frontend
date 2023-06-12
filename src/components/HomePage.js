import React, {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import Footer from './Footer.js'
import codingVidBG from '../assets/CodingClearShort.mp4'


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

                    


            <div className="projects-hp h-100">
                <div className="col mx-auto position-absolute pos-forward w-100 d-flex justify-content-center">
                    <Link title="Alex Grimes' Coding Projects" className="text-box mb-0 justify-content-center align-items-center text-decoration-none text-white" to="/projects"><h2 className="projects-title-hp d-flex align-items-center p-5">View Alex's Coding Projects</h2></Link>
                </div>
                {/* try to make it look like a reflection on either side of the video */}
                <div className="w-100 video-section d-flex justify-content-center py-5">
                    <video className="move-right video-reflect" autoPlay loop muted>
                            <source src={codingVidBG} type="video/mp4" />
                    </video>
                    <video className="d-flex justify-content-center align-items-center mx-auto position-absolute hp-video" autoPlay loop muted>
                            <source src={codingVidBG} type="video/mp4" />
                    </video>
                    <video className="move-left video-reflect" autoPlay loop muted>
                            <source src={codingVidBG} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="exp-abtme-container mb-5">
                <div className="exp-conatiner-hp m-auto mx-3">
                    <Link title="Alex Grimes' Work Experience" className="text-decoration-none text-white" to="/experience">
                        <div className="experience-hp d-flex justify-content-center align-items-center p-3">
                            <h2 className="experience-title-hp">Read about how Alex became a Programmer and Other Experiences</h2>
                        </div> 
                    </Link>
                </div>
                <div className="exp-conatiner-hp m-auto mx-3">
                    <Link title="Alex Grimes' About Me Page" className="text-decoration-none text-black" to="/aboutme">
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