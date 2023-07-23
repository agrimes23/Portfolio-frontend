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
            {/* name and title */}
            <div className="style-border">
                <div id="intro_section" className="w-4/5 my-36 row text-center mx-auto flex justify-center items-center">
                        <h1 className="font-titleName text-red-500 text-7xl row justify-center">Alex Grimes</h1>
                        <h2 className="description-title font-newsCycle text-6xl">Full-Stack Developer | Web Developer</h2>
                </div>
            </div>

                    

            {/* projects section with video mirroring */}
            <div className="projects-hp bg-codingDiv h-100">
                <div className="col mx-auto absolute pos-forward w-100 flex justify-center">
                    <Link title="Alex Grimes' Coding Projects" className="text-box mb-0 justify-center items-center no-underline text-white" to="/projects"><h2 className="bg-darkBrown text-3xl bg-opacity-95 flex items-center p-5">View Alex's Coding Projects</h2></Link>
                </div>
                {/* try to make it look like a reflection on either side of the video */}
                <div className="w-100 video-section flex justify-center py-5">
                    <video className="move-right video-reflect" autoPlay loop muted>
                            <source src={codingVidBG} type="video/mp4" />
                    </video>
                    <video className="flex justify-center items-center mx-auto absolute hp-video" autoPlay loop muted>
                            <source src={codingVidBG} type="video/mp4" />
                    </video>
                    <video className="move-left video-reflect" autoPlay loop muted>
                            <source src={codingVidBG} type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* about me */}
            <div className="exp-abtme-container mb-5">
                <div className="exp-conatiner-hp m-auto mx-3">
                    <Link title="Alex Grimes' Work Experience" className="no-underline text-white" to="/experience">
                        <div className="experience-hp flex justify-center items-center p-3">
                            <h2 className="experience-title-hp text-3xl">Read about how Alex became a Programmer and Other Experiences</h2>
                        </div> 
                    </Link>
                </div>

                {/* experience */}
                <div className="exp-conatiner-hp m-auto mx-3">
                    <Link title="Alex Grimes' About Me Page" className="no-underline text-black" to="/aboutme">
                        <div className="about-me-hp flex justify-center items-center p-3">
                            <h2 className="about-me-title-hp text-3xl">Still Curious? Read the About Me Page!</h2>
                        </div> 
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    )

}

export default HomePage;