import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'

const MobileProjects = () => {

    // TODO: 
    // // Record videos of clicking on features of the mobile app (per project, which there's probably 2)
    // // // Before: make sure each screen is reacting properly
    // // Make hover animation for each card
    // // Format/Styling for mobile: should videos take up whole/most of the screen?
    // // Eventually reformat to 
    // // // tailwind css 
    // // // typescript

    return (
        <>
            {/* Page Container / Fade-In*/}
            <div className="project-page fadeInTop m-5 pb-4 d-flex row">

                    {/* Page title */}
                    <div className="my-auto">
                        <h1 className="">Mobile Projects (React Native)</h1>
                    </div>

                    {/* Mobile Projects Card Container */}
                    <div className="card-container mx-auto my-5 d-flex row">                      
                        {/* Cards */}
                        <div className="project-border d-flex p-3 m-2">
                            <div className="temp-mock-vid"></div>
                            <div className="p-5 d-flex row mt-auto">
                                <h2>Project Name</h2>
                                <h4>Github Code</h4>
                            </div>
                        </div>
                        <div className="project-border d-flex p-3 m-2">
                            <div className="temp-mock-vid"></div>
                            <div className="p-5 d-flex row mt-auto">
                                <h2>Project Name</h2>
                                <h4>Github Code</h4>
                            </div>
                        </div>

                    </div>

                    {/* Github link */}
                    <div className="text-center mb-5">
                        <h3>See my github: <a href="https://github.com/agrimes23">agrimes23</a></h3>
                    </div>

            </div>

            <footer className="footer footer-projects p-5 text-center">
                <a className="py-5" href="https://github.com/agrimes23"><i className="footer-text fa-brands fa-github text-white px-5" title="Github"></i></a>
                <a className="py-5" href="https://www.linkedin.com/in/alex-grimes-dev/"><i className="footer-text fa-brands fa-linkedin text-white px-5" title="LinkedIn"></i></a>
                <a className="py-5" href="mailto: alexgrimes23@gmail.com"><i className="footer-text fa-regular fa-envelope text-white px-5" title="Email"></i></a>
            </footer>
        </>
    )
}

export default MobileProjects;