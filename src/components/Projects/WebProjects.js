import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import Navbar from '../Navbar'
import { motion } from 'framer-motion'
import travelPlanImg from '../../images/TravelPlansScreenShot.PNG'
import StyleFinderImg from '../../images/StyleFinder.PNG'
import WeatherApp from '../../images/WeatherApp.PNG'
import Footer from '../Footer.js'
import flowerForest from '../../assets/flower_bush.jpg'
import wood from '../../assets/wood.jpg'

const WebProjects = () => {

    useEffect (() => {
        window.scroll(0,0)
    })

    return (
        <>
            <Navbar />
            <div className="flex min-w-screen min-h-screen xlMax:m-0 pb-5 flex-col">
       
                    <div className="flex w-full h-60 bg-cover" style={{ backgroundImage: `url(${flowerForest})`}}>
                        <h1 className="my-auto ml-20 text-5xl font-bold text-white bg-darkOliveGreen bg-opacity-80 p-8 rounded mdMax:mx-auto">Web Projects</h1>
                    </div>


                    {/* div for projects container */}
                    <motion.div className="my-20 py-5 xlMax:flex-col xlMax:mx-auto flex justify-center " 
                        initial={{y: -200, opacity: 0 }} 
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}>
                            
                            {/* div for first card */}
                            <div className="bg-lemonChiffon rounded w-[500px] 2xlMax:max-w-md border-2 border-themeTan flex flex-col items-stretch mdMax:w-[300px] mdMin:m-5 mdMax:m-1">
                                <div className="p-3">
                                    <a className="text-decoration-none" href="https://github.com/agrimes23/travel-plan-frontend">
                                        <div className="border">
                                            <img className="flex-1 w-full h-[300px] bg-cover" src={travelPlanImg} alt="card project img"/>
                                            
                                        </div>
                                    </a>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <h5 className="py-5 text-center text-xl text-black font-bold">Travel Plans Web App</h5>
                                    <div className="m-6 flex row justify-around">
                                        <a className="flex text-center justify-center w-36 py-2 rounded bg-darkOliveGreen text-white text-decoration-none mdMax:m-2" href="https://travel-planning.herokuapp.com/">Live Site</a>
                                        <a className="flex text-center justify-center w-36 py-2 rounded bg-salmon text-decoration-none text-darkGreen mdMax:m-2" href="https://github.com/agrimes23/travel-plan-frontend">See Github Repo</a>
                                    </div>
                                </div>    
                            </div>

                            {/* div for second card */}
                            <div className="bg-lemonChiffon rounded w-[500px] 2xlMax:max-w-md border-2 border-themeTan flex flex-col items-stretch mdMax:w-[300px] mdMin:m-5 mdMax:m-1">    
                                <div className="">
                                    <a className="text-decoration-none" href="https://github.com/agrimes23/weather_frontend">
                                        <div className="p-3">
                                            <img className="flex-1 w-full h-[300px] bg-cover" src={WeatherApp} alt="card project img"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="flex flex-col justify-end ">
                                    <h5 className="py-5 text-center text-xl text-black font-bold">Weather Notes Web App</h5>
                                    <div className="m-6 flex row justify-around">
                                        <a className="text-center flex justify-center w-36 py-2 rounded bg-darkOliveGreen text-white text-decoration-none mdMax:m-2" href="https://evening-reef-65787.herokuapp.com/">Live Site</a>
                                        <a className="text-center flex justify-center w-36 py-2 rounded bg-salmon text-decoration-none text-darkGreen mdMax:m-2" href="https://github.com/agrimes23/weather_frontend">See Github Repo</a>
                                    </div>
                                </div>
                            </div>
                
                        </motion.div>

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