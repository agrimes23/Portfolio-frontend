import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import travelPlanImg from '../../images/TravelPlansScreenShot.PNG'
import StyleFinderImg from '../../images/StyleFinder.PNG'
import WeatherApp from '../../images/WeatherApp.PNG'
import Footer from '../Footer.js'
import flowerForest from '../../assets/flower_bush.jpg'

const WebProjects = () => {

    useEffect (() => {
        window.scroll(0,0)
    })

    return (
        <>

            <div className="flex min-w-screen h-full xlMax:m-0 fadeInTop pb-5 row">
       
                    <div className="flex w-full h-60 bg-cover" style={{ backgroundImage: `url(${flowerForest})`}}>
                        <h1 className="my-auto ml-20 text-5xl font-bold text-white bg-darkOliveGreen bg-opacity-80 p-8 rounded">Web Projects</h1>
                    </div>


                    {/* div for projects container */}
                    <div className="my-20 card-container py-5 row d-flex justify-content-center mx-auto">
                        {/* div for projects row */}
                        <div className="rows-container 2xlMax:flex-col my-5 py-5 d-flex justify-content-center">
                            
                            {/* div for first card */}
                            <div className="cards rounded w-[500px] 2xlMax:w-full border-2 m-5">
                                <div className="">
                                    <a className="text-decoration-none" href="https://github.com/agrimes23/travel-plan-frontend">
                                        <div className="d-flex row">
                                            <img className="" src={travelPlanImg} alt="card project img"/>
                                            <h5 className="py-5 text-center text-xl text-black">Travel Plans Web App</h5>
                                        </div>
                                    </a>
                                </div>    
                                <div className="m-6 flex row justify-around">
                                        <a className="flex text-center justify-center w-36 py-2 rounded bg-darkOliveGreen text-white text-decoration-none" href="https://travel-planning.herokuapp.com/">Live Site</a>
                                        <a className="flex text-center justify-center w-36 py-2 rounded bg-salmon text-decoration-none text-darkGreen" href="https://github.com/agrimes23/travel-plan-frontend">See Github Repo</a>
                                </div>
                                
                            </div>

                            {/* div for second card */}
                            <div className="cards rounded w-[500px] 2xlMax:w-full border-2 m-5 ">    
                                <div className="">
                                    <a className="text-decoration-none" href="https://github.com/agrimes23/weather_frontend">
                                        <div className="d-flex row">
                                            <img className="" src={WeatherApp} alt="card project img"/>
                                            <h5 className="py-5 text-center text-xl text-black">Weather Notes Web App</h5>
                                        </div>
                                    </a>
                                </div>
                                <div className="m-6 flex row justify-around">
                                        <a className="text-center flex justify-center w-36 py-2 rounded bg-darkOliveGreen text-white text-decoration-none" href="https://evening-reef-65787.herokuapp.com/">Live Site</a>
                                        <a className="text-center flex justify-center w-36 py-2 rounded bg-salmon text-decoration-none text-darkGreen" href="https://github.com/agrimes23/weather_frontend">See Github Repo</a>
                                </div>
                                
                            </div>
                            
                        </div>

                        </div>

                        <div className="text-center">
                            <h3 className="text-xl ">See my github: <a href="https://github.com/agrimes23">agrimes23</a></h3>
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