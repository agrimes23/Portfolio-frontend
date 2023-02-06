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
            <div className="project-page m-auto">
            <div className="project-content fadeInTop m-5 pb-4 d-flex justify-content-center row m-auto">
                    <div>
                        <h1 className="mt-5">Projects</h1>
                    </div>
                    <div className="card-container row d-flex justify-content-center m-auto">
                        <div className="rows-container my-5 py-5 d-flex justify-content-center">
                            
                            <div className="cards container project-card p-3">
                                <a className="text-decoration-none" href="https://github.com/agrimes23/travel-plan-frontend">
                                <div className="d-flex row justify-content-center p-3">
                                    <img className="card-img-top" src={travelPlanImg} alt="card project img"/>
                                    <h5 className="py-3 text-center text-black">Travel Plans Web App</h5>
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
                            <a className="text-decoration-none" href="https://github.com/agrimes23/GAFrontend">
                                <div className="d-flex row justify-content-center p-3">
                                    <img className="card-img-top" src={StyleFinderImg} alt="card project img"/>
                                    <h5 className="py-3 text-center text-black">Shopping Web App</h5>
                                </div>
                                <div className="card-body overlay">
                                    <div className="text">
                                        <h5 className="card-title">Shopping Web App</h5>
                                        <p className="card-text"></p>
                                        <a className="text-decoration-none text-white" href="https://github.com/agrimes23/GAFrontend">See Github Repo</a>
                                    </div>
                                </div>
                                </a>
                            </div>

                            <div className="cards container project-card p-3">
                                <a className="text-decoration-none" href="https://github.com/agrimes23/weather_frontend">
                                <div className="d-flex row justify-content-center p-3">
                                    <img className="card-img-top" src={WeatherApp} alt="card project img"/>
                                    <h5 className="py-3 text-center text-black">Weather Notes Web App</h5>
                                </div>
                                <div className="card-body overlay">
                                    <div className="text">
                                        <h5 className="card-title">Weather Notes Web App</h5>
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
                </div>
        </>
    )

}

export default Projects;