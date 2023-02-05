import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import travelPlanImg from '../images/TravelPlansScreenShot.PNG'
import StyleFinderImg from '../images/StyleFinder.PNG'
import WeatherApp from '../images/WeatherApp.PNG'

const Projects = () => {

    // TODO: make an overlay for website title and short about me over the img. It can act as a table of contents
    // TODO: make the cards appear in bigger rows..?


    return (
        <>
            <div id="projects_section" className="project-page fadeInTop mb-5 pb-4 d-flex row m-auto w-75">
                    <div>
                        <h2 className="mt-5">Projects</h2>
                    </div>
                    <div className="card-container row d-flex justify-content-center m-auto py-5">
                        <div className="d-flex justify-content-center border-bottom">
                            
                            <div className="cards border-right project-card p-3">
                                <div className="d-flex justify-content-center p-3">
                                    <img className="card-img-top" src={travelPlanImg} alt="card project img"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Travel Plans Web App</h5>
                                    <p className="card-text">About</p>
                                    <a href="https://github.com/agrimes23/travel-plan-frontend">Github Repo</a>
                                </div>
                            </div>

                            <div className="cards project-card p-3">
                                <div className="d-flex justify-content-center p-3">
                                    <img className="card-img-top" src={StyleFinderImg} alt="card project img"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Weather Notes Web App</h5>
                                    <p className="card-text">About</p>
                                    <a href="#">Github Repo</a>
                                </div>
                            </div>

                            <div className="cards project-card p-3">
                                <div className="d-flex justify-content-center p-3">
                                    <img className="card-img-top" src={WeatherApp} alt="card project img"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Shopping Web App</h5>
                                    <p className="card-text">About</p>
                                    <a href="https://github.com/agrimes23/GAFrontend">Github Repo</a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex row d-flex justify-content-center border-bottom">
                            <div className="cards project-card p-3">
                                <div className="d-flex justify-content-center p-3">
                                    <img className="card-img-top" src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1025449630.jpg" alt="card project img"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Project Title</h5>
                                    <p className="card-text">About</p>
                                    <a href="#">Github Repo</a>
                                </div>
                            </div>
                   
                            
                        </div>
                        </div>
                    </div>
                
        </>
    )

}

export default Projects;