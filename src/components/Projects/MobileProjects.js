import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import RNWeather from '../../assets/ReactNativeWeatherVid.mp4'
import RNCamera from '../../assets/InsuranceCardVid.mp4'
import stars from '../../assets/starry_sky.jpg'
import { motion } from 'framer-motion'

const MobileProjects = () => {

    // TODO: 
    // // Record videos of clicking on features of the mobile app (per project, which there's probably 2)
    // // Change hover animation to framer motion (can just fix errors for now)
    // // Format/Styling for mobile: should videos take up whole/most of the screen?
    // // Eventually reformat to 
    // // // tailwind css 
    // // // typescript

    return (
        <>
            {/* Page Container / Fade-In*/}
            <div className=" min-w-screen min-h-screen w-90 xlMax:m-0 fadeInTop pb-4 flex row">

                    {/* Page title */}
                    <div className="flex w-full h-60 bg-cover smMax:h-72" style={{ backgroundImage: `url(${stars})`}}>
                        <h1 className="my-auto ml-20 text-5xl font-bold bg-darkBlueGreen bg-opacity-90 text-lemonChiffon p-8 rounded mdMax:mx-auto">Mobile Projects (React Native)</h1>
                    </div>

                    {/* Mobile Projects Card Container */}
                    <div className="my-20  mx-auto ">                      
                        {/* Cards */}
                        <motion.div className="project-border flex xlMax:flex-col xlMax:items-center xlMax:min-w-0 xlMax:w-full rounded p-4 mx-auto my-3"
                        whileHover={{ scale: 1.04 }}
                        >
                            <video className="mobile-video 2xlMax:w-8/12" controls >
                                <source src={RNCamera} type="video/mp4" />
                            </video>
                            
                            <div className="m-project-desc p-3 mx-3 flex row mt-auto xlMax:w-full ">
                                <h3 className="py-4 text-3xl">Page with Camera Feature</h3>
                                <h5 className="text-lg">Summary: Testing out camera functionality on React Native by making a home screen where users can add photos from gallery or take a picture with their phone camera. Also made a modal slide up from the bottom where users can choose how they want to import their photos</h5>
                                <h5 className="text-lg">Frontend: React Native, Typescript, Nativewind CSS, React Native Image Picker</h5>
                                <a className="text-lg" href="https://github.com/agrimes23/ReactNativeUseCamera"><h6>Frontend Github Code</h6></a>
                            </div>
                        </motion.div>
                        <motion.div className="project-border flex xlMax:flex-col xlMax:items-center xlMax:min-w-0 xlMax:w-full rounded p-4 mx-auto my-2"
                        whileHover={{ scale: 1.04 }}
                        >
                            <video className="mobile-video 2xlMax:w-8/12" controls >
                                <source src={RNWeather} type="video/mp4" />
                            </video>
                            <div className="m-project-desc xlMax:w-full smMax:p-6 p-3 mx-3 flex row items-center mt-auto">
                                <h3 className="py-4 text-3xl">Mobile Weather App</h3>
                                <h5 className="text-lg">Summary: Testing out different React Native features like slider, React Native Router, BottomTabs, and routing a simple backend with the mobile app </h5>
                                <h5 className="text-lg">Frontend: React Native, Typescript, Nativewind CSS, React Navigation</h5>
                                <h5 className="text-lg">Backend: Node.js, Express, PostreSQL</h5>

                                <a className="text-lg" href="https://github.com/agrimes23/ReactNativeWeatherFront"><h6>Frontend Github Code</h6></a>
                                <a className="text-lg" href="https://github.com/agrimes23/ReactNativeWeatherBack"><h6>Backend Github Code</h6></a>
                            </div>
                        </motion.div>

                    </div>

                    {/* Github link */}
                    <div className="text-center my-5">
                        <h3 className="text-xl ">See my github: <a href="https://github.com/agrimes23">agrimes23</a></h3>
                    </div>

            </div>

            <footer className="footer footer-projects bg-darkBlueGreen relative p-5 text-center">
                <a className="py-5" href="https://github.com/agrimes23"><i className="footer-text fa-brands fa-github text-white px-5" title="Github"></i></a>
                <a className="py-5" href="https://www.linkedin.com/in/alex-grimes-dev/"><i className="footer-text fa-brands fa-linkedin text-white px-5" title="LinkedIn"></i></a>
                <a className="py-5" href="mailto: alexgrimes23@gmail.com"><i className="footer-text fa-regular fa-envelope text-white px-5" title="Email"></i></a>
            </footer>
        </>
    )
}

export default MobileProjects;