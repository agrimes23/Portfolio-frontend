import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import travelPlanImg from '../../images/TravelPlansScreenShot.PNG'
import StyleFinderImg from '../../images/StyleFinder.PNG'
import WeatherApp from '../../images/WeatherApp.PNG'
import Footer from '../Footer.js'

const WebProjects = () => {

    useEffect (() => {
        window.scroll(0,0)
    })

    return (
        <>

            <div className="project-page h-full w-90 xlMax:m-0 fadeInTop m-5 pb-5 d-flex row">
                    <div>
                        <h1 className="mt-5">Web Projects</h1>
                    </div>
                    <div className="card-container py-5 row d-flex justify-content-center m-auto">
                        <div className="rows-container 2xlMax:flex-col my-5 py-5 d-flex justify-content-center">
                            
                            <div className="cards w-[330px] 2xlMax:w-full container p-3">
                                <a className="text-decoration-none" href="https://github.com/agrimes23/travel-plan-frontend">
                                <div className="d-flex row justify-content-center p-3">
                                    <img className="card-img-top" src={travelPlanImg} alt="card project img"/>
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

                            <div className="cards w-[330px] 2xlMax:w-full container p-3">
                            <a className="text-decoration-none" href="https://github.com/agrimes23/GAFrontend">
                                <div className="d-flex row justify-content-center p-3">
                                    <img className="card-img-top" src={StyleFinderImg} alt="card project img"/>
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

                            <div className="cards w-[330px] 2xlMax:w-full container p-3">
                                <a className="text-decoration-none" href="https://github.com/agrimes23/weather_frontend">
                                <div className="d-flex row justify-content-center p-3">
                                    <img className="card-img-top" src={WeatherApp} alt="card project img"/>
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

                        </div>

                        <div className="text-center">
                            <h3>See my github: <a href="https://github.com/agrimes23">agrimes23</a></h3>
                        </div>
                    </div>

                {/* <Footer/> */}
                <footer className="footer footer-projects position-relative w-100 p-5 text-center">
                    <a className="py-5" href="https://github.com/agrimes23"><i className="footer-text fa-brands fa-github text-white px-5" title="Github"></i></a>
                    <a className="py-5" href="https://www.linkedin.com/in/alex-grimes-dev/"><i className="footer-text fa-brands fa-linkedin text-white px-5" title="LinkedIn"></i></a>
                    <a className="py-5" href="mailto: alexgrimes23@gmail.com"><i className="footer-text fa-regular fa-envelope text-white px-5" title="Email"></i></a>
                </footer>
        </>
    )

}

export default WebProjects;