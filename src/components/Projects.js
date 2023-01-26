import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import travelPlanImg from '../images/TravelPlansScreenShot.PNG'
import StyleFinderImg from '../images/StyleFinder.PNG'
import WeatherApp from '../images/WeatherApp.PNG'

const Projects = () => {

    return (
        <>
            <div id="projects_section" className="project-page fadeInTop mb-5 pb-4 d-flex align-items-center row m-auto w-75">
                    <div>
                        <h2 className="mt-5">Projects</h2>
                    </div>
                    <div className="card-container my-5">
                        <div className="d-flex col">
                            <div className="card project-card m-3">
                                <img className="card-img-top" src={travelPlanImg} alt="card project img"/>
                                <div className="card-body">
                                    <h5 className="card-title">Travel Plans Web App</h5>
                                    <p className="card-text">About</p>
                                    <a href="https://github.com/agrimes23/travel-plan-frontend">Github Repo</a>
                                </div>
                            </div>

                            <div className="card project-card m-3">
                                <img className="card-img-top" src={StyleFinderImg} alt="card project img"/>
                                <div className="card-body">
                                    <h5 className="card-title">Weather Notes Web App</h5>
                                    <p className="card-text">About</p>
                                    <a href="#">Github Repo</a>
                                </div>
                            </div>

                            <div className="card project-card m-3">
                                <img className="card-img-top" src={WeatherApp} alt="card project img"/>
                                <div className="card-body">
                                    <h5 className="card-title">Shopping Web App</h5>
                                    <p className="card-text">About</p>
                                    <a href="https://github.com/agrimes23/GAFrontend">Github Repo</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* <div className="card project-card m-3">
                                <img className="card-img-top" src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1025449630.jpg" alt="card project img"/>
                                <div className="card-body">
                                    <h5 className="card-title">Project Title</h5>
                                    <p className="card-text">About</p>
                                    <a href="#">Github Repo</a>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
        </>
    )

}

export default Projects;