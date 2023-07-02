import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import RNWeather from '../../assets/ReactNativeWeatherVid.mp4'
import RNCamera from '../../assets/RNCamera.mp4'

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
                        <h1 className="py-5">Mobile Projects (React Native)</h1>
                    </div>

                    {/* Mobile Projects Card Container */}
                    <div className="card-container mx-auto my-5 row">                      
                        {/* Cards */}
                        <div className="project-border rounded d-flex p-4 mx-auto my-2">
                            <video className="mobile-video" controls >
                                <source src={RNCamera} type="video/mp4" />
                            </video>
                            
                            <div className="m-project-desc p-5 mx-3 d-flex row mt-auto">
                                <h3 className="py-4">Page with Camera Feature</h3>
                                <h5>Summary: Testing out camera functionality on React Native by making a home screen where users can add photos from gallery or take a picture with their phone camera. Also made a modal slide up from the bottom where users can choose how they want to import their photos</h5>
                                <h5>Frontend: React Native, Typescript, Nativewind CSS, React Native Image Picker</h5>
                                <a href="https://github.com/agrimes23/ReactNativeUseCamera"><h6>Frontend Github Code</h6></a>
                            </div>
                        </div>
                        <div className="project-border rounded d-flex p-4 mx-auto my-2">
                            <video className="mobile-video" controls >
                                <source src={RNWeather} type="video/mp4" />
                            </video>
                            <div className="m-project-desc p-5 mx-3 d-flex row mt-auto">
                                <h3 className="py-4">Mobile Weather App</h3>
                                <h5>Summary: Testing out different React Native features like slider, React Native Router, BottomTabs, and routing a simple backend with the mobile app </h5>
                                <h5>Frontend: React Native, Typescript, Nativewind CSS, React Navigation</h5>
                                <h5>Backend: Node.js, Express, PostreSQL</h5>

                                <a href="https://github.com/agrimes23/ReactNativeWeatherFront"><h6>Frontend Github Code</h6></a>
                                <a href="https://github.com/agrimes23/ReactNativeWeatherBack"><h6>Backend Github Code</h6></a>
                            </div>
                        </div>

                    </div>

                    {/* Github link */}
                    <div className="text-center my-5">
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