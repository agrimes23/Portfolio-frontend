import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'

const MobileProjects = () => {

    // TODO: 
    // // Record videos of clicking on features of the mobile app (per project, which there's probably 2)
    // // // Before: make sure each screen is reacting properly
    // // Make containers for each card. 
    // // // add video and github link
    // // Format/Styling for mobile: should videos take up whole/most of the screen?
    // // Eventually reformat to 
    // // // tailwind css 
    // // // typescript

    return (
        <>

<div className="project-page m-auto">
            <div className="project-content fadeInTop m-5 pb-4 d-flex justify-content-center row m-auto">
                    <div>
                        <h1 className="mt-5">Mobile Projects (React Native)</h1>
                    </div>
                    <div className="card-container row d-flex justify-content-center m-auto">
                            
                            <div className="cards container project-card p-3">
                                <a className="text-decoration-none" href="https://github.com/agrimes23/travel-plan-frontend">
                                <div className="d-flex row justify-content-center p-3">
                                    <img className="card-img-top" alt="card project img"/>
                                    <h5 className="py-3 text-center text-black">Travel Plans Web App</h5>
                                </div>
                                <div className="card-body overlay">
                                    <div className="text">
                                        <h5 className="card-title ">Travel Plans Web App</h5>
                                        <p className="card-text "></p>
                                        <a className="row text-center d-flex justify-content-center text-decoration-none text-white" href="https://travel-planning.herokuapp.com/">Live Site</a>
                                        <a className="row text-center d-flex justify-content-center text-decoration-none text-white" href="https://github.com/agrimes23/travel-plan-frontend">See Github Repo</a>
                                    </div>
                                </div>
                                </a>
                            </div>

                            <div className="cards container project-card p-3">
                            <a className="text-decoration-none" href="https://github.com/agrimes23/GAFrontend">
                                <div className="d-flex row justify-content-center p-3">
                                    <img className="card-img-top" alt="card project img"/>
                                    <h5 className="py-3 text-center text-black">Shopping Web App</h5>
                                </div>
                                <div className="card-body overlay">
                                    <div className="text">
                                        <h5 className="card-title">Shopping Web App</h5>
                                        <p className="card-text"></p>
                                        <a className="row text-center d-flex justify-content-center text-decoration-none text-white" href="https://arcane-refuge-91163.herokuapp.com/">Live Site</a>
                                        <a className="row text-center d-flex justify-content-center text-decoration-none text-white" href="https://github.com/agrimes23/GAFrontend">See Github Repo</a>
                                    </div>
                                </div>
                                </a>
                            </div>

                            <div className="cards container project-card p-3">
                                <a className="text-decoration-none" href="https://github.com/agrimes23/weather_frontend">
                                <div className="d-flex row justify-content-center p-3">
                                    <img className="card-img-top" alt="card project img"/>
                                    <h5 className="py-3 text-center text-black">Weather Notes Web App</h5>
                                </div>
                                <div className="card-body overlay">
                                    <div className="text">
                                        <h5 className="card-title">Weather Notes Web App</h5>
                                        <p className="card-text"></p>
                                        <a className="row text-center d-flex justify-content-center text-decoration-none text-white" href="https://evening-reef-65787.herokuapp.com/">Live Site</a>
                                        <a className="row text-center d-flex justify-content-center text-decoration-none text-white" href="https://github.com/agrimes23/weather_frontend">See Github Repo</a>
                                    </div>
                                </div>
                                </a>
                            </div>
                            

                        </div>

                        <div className="text-center">
                            <h3>See my github: <a href="https://github.com/agrimes23">agrimes23</a></h3>
                        </div>
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