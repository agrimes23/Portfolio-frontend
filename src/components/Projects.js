import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import travelPlanImg from '../images/TravelPlansScreenShot.PNG'
import StyleFinderImg from '../images/StyleFinder.PNG'
import WeatherApp from '../images/WeatherApp.PNG'

const Projects = () => {

    useEffect (() => {
        window.scroll(0,0)
    })

    return (
        <>
            <div id="projects_section" className="project-page fadeInTop mb-5 pb-4 d-flex row m-auto">
                    <div>
                        <h2 className="mt-5">Projects</h2>
                        <p>(hover to see more)</p>
                    </div>
                    <div className="card-container row d-flex justify-content-center m-auto py-5">
                        <div className="rows-container my-5 py-5 d-flex justify-content-center">
                            
                            <div className="cards container project-card p-3">
                                <a href="https://github.com/agrimes23/travel-plan-frontend">
                                <div className="d-flex justify-content-center p-3">
                                    <img className="card-img-top" src={travelPlanImg} alt="card project img"/>
                                </div>
                                <div className="card-body overlay">
                                    <div className="text">
                                        <h5 className="card-title ">Travel Plans Web App</h5>
                                        <p className="card-text "></p>
                                        <a className="text-decoration-none text-white" href="https://github.com/agrimes23/travel-plan-frontend">See Github Repo</a>
                                    </div>
                                </div>
                                </a>
                            </div>

                            <div className="cards container project-card p-3">
                            <a href="https://github.com/agrimes23/GAFrontend">
                                <div className="d-flex justify-content-center p-3">
                                    <img className="card-img-top" src={StyleFinderImg} alt="card project img"/>
                                </div>
                                <div className="card-body overlay">
                                    <div className="text">
                                        <h5 className="card-title">Weather Notes Web App</h5>
                                        <p className="card-text"></p>
                                        <a className="text-decoration-none text-white" href="https://github.com/agrimes23/GAFrontend">See Github Repo</a>
                                    </div>
                                </div>
                                </a>
                            </div>

                            <div className="cards container project-card p-3">
                                <a href="https://github.com/agrimes23/weather_frontend">
                                <div className="d-flex justify-content-center p-3">
                                    <img className="card-img-top" src={WeatherApp} alt="card project img"/>
                                </div>
                                <div className="card-body overlay">
                                    <div className="text">
                                        <h5 className="card-title">Shopping Web App</h5>
                                        <p className="card-text"></p>
                                        <a className="text-decoration-none text-white" href="https://github.com/agrimes23/weather_frontend">See Github Repo</a>
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
                
        </>
    )

}

export default Projects;