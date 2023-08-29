import React, {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from './Footer.js'
import codingVidBG from '../assets/CodingClearShort.mp4'
import bgSplash from '../assets/SplashOfPaint.jpg'
import treeWater from '../assets/baywithTrees.jpg'
import vines from '../assets/green_vines.jpg'

const HomePage = () => {


    useEffect (() => {
        window.scroll(0,0)
    })

    return (
        <>
            {/* name and title */}
           <div className="mb-20 min-w-screen">
            <div className="bg-cover " style={{ backgroundImage: `url(${vines})` }} >
                <div id="intro_section" className=" py-80 flex items-center text-center">
                        <div className="bg-lemonChiffon bg-opacity-90 rounded max-w-5xl w-4/5 mx-auto py-10 px-8 mdMax:px-8">
                            <h1 className="font-titleName text-darkSalmon text-7xl row justify-center mdMax:text-5xl">Alex Grimes</h1>
                            <h2 className="description-title font-newsCycle text-darkOliveGreen text-6xl mdMax:text-4xl">Full-Stack Developer | Web Developer</h2>
                        </div>
                </div>
            </div>

            {/* projects section with video mirroring */}
            <div className="projects-hp my-28 mdMax:h-64 bg-codingDiv h-100">
                <div className="col mx-auto absolute pos-forward smMax:translate-y-2/4 mdMax:translate-y-3/4 xlMax:translate-y-full z-10 translate-y-full w-100 h-44 flex justify-center">
                    <Link title="Alex Grimes' Coding Projects" className="text-box mb-0 justify-center items-center no-underline text-white" to="/projects"><h2 className="bg-darkBrown text-3xl bg-opacity-95 flex items-center p-5">View Alex's Coding Projects</h2></Link>
                </div>

                <div className="w-100 video-section flex justify-center py-5">
                    <video className="move-right mr-72 video-reflect xlMax:h-80" autoPlay loop muted>
                            <source src={codingVidBG} type="video/mp4" />
                    </video>
                    <video className="flex justify-center items-center mx-auto absolute hp-video mdMax:h-72 mdMax:mt-5 xlMax:h-80" autoPlay loop muted>
                            <source src={codingVidBG} type="video/mp4" />
                    </video>
                    <video className="move-left ml-72 video-reflect xlMax:h-80" autoPlay loop muted>
                            <source src={codingVidBG} type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* container for two boxes */}
            <div className="flex xlMin:flex-row flex-col justify-center mx-20 mb-20 smMax:mx-5">
                {/* about me */}
                <div className="exp-conatiner-hp my-5 px-auto ">
                    <Link title="Alex Grimes' Work Experience" className="no-underline text-white" to="/experience">
                        {/* experience-hp */}
                        <motion.div className="bg-themeTan h-80 rounded xlMin:w-4/6 flex items-center p-3" whileHover={{ scale: 1.1 }}>
                            <h2 className="experience-title-hp text-darkBlueGreen text-3xl">Read about how Alex became a Programmer and Other Experiences</h2>
                        </motion.div> 
                    </Link>
                </div>

                {/* experience */}
                <div className="exp-conatiner-hp text-center my-5 px-auto">
                    <Link title="Alex Grimes' About Me Page" className="no-underline text-black" to="/aboutme">
                        <motion.div className=" bg-darkOliveGreen flex h-80 rounded xlMin:w-62 justify-center items-center p-3" whileHover={{ scale: 1.1 }}>
                            <h2 className=" text-lemonChiffon text-3xl px-10">Still Curious? Read the About Me Page!</h2>
                        </motion.div> 
                    </Link>
                </div>
            </div>
            </div>
            <Footer/>
        </>
    )

}

export default HomePage;