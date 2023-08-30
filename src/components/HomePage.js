import React, {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from './Footer.js'
import codingVidBG from '../assets/CodingClearShort.mp4'
import treeWater from '../assets/baywithTrees.jpg'
import vines from '../assets/green_vines.jpg'
import wood from '../assets/wood.jpg'
import waterColorPbp from '../assets/blue_purple_pink.jpg'
import darkWaterColor from '../assets/darkWaterColor.jpg'
import divWaterColor from '../assets/blue_purple.jpg'
import divWaterColor2 from '../assets/blue_purple_pink.jpg'

const HomePage = () => {

    const [hovered, setHovered] = useState(false);




    // useEffect (() => {
    //     window.scroll(0,0)
    // })

    return (
        <>
            {/* name and title */}
           <div className="mb-20 min-w-screen">
            <div className="bg-cover shadow-2xl" style={{ backgroundImage: `url(${darkWaterColor})` }} >
                <div id="intro_section" className=" py-52 flex items-center  justify-center">
                        <motion.div className="border-lemonChiffon border-4 -mt-44 bg-opacity-90 rounded px-6 max-w-4xl min-w-sm w-4/12 py-14 mdMax:px-8" 
                        initial={{x: -300, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        >
                            <h1 className="font-titleName text-lemonChiffon text-center text-7xl row justify-center mdMax:text-5xl">Alex Grimes</h1>
                            <h2 className="description-title font-newsCycle text-[#77d8ff] text-center text-6xl mdMax:text-4xl">Full Stack Developer</h2>
                        </motion.div>
                        <motion.div className="bg-[#111c41] mx-10 p-10 mt-44 max-w-xl bg-opacity-60 rounded self-end interactive-div"
                        initial={{x: 300, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        >
                            <h1 className="text-lemonChiffon text-2xl">I'm a software engineer and full stack developer who writes dynamic, well organized code.</h1>
                            <h1 className="text-lemonChiffon text-2xl mt-5">Delve deeper by exploring this site's <a className="text-[#94e1ff] underline" href='https://github.com/agrimes23/Portfolio-frontend'>code on GitHub</a></h1>
                        </motion.div>
                </div>
            </div>

          {/* projects section with video mirroring */}
            <div className="w-3/4 m-32 mx-auto py-32 rounded bg-codingDiv shadow-2xl mdMax:h-64 mdMax:mb-80 h-full">
                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}>
                <div className="absolute smMax:translate-y-2/4 bg-salmon mdMax:translate-y-3/4  z-10 translate-y-full h-44 flex justify-center w-3/4" >
                    <Link title="Alex Grimes' Coding Projects" className="no-underline text-white" to="/projects"><motion.h2 className="bg-[#091625] text-3xl bg-opacity-95 flex items-center p-5" whileHover={{ scale: 1.1 }}>View Alex's Coding Projects</motion.h2></Link>
                </div>

                    <div className="w-full bg-codingDiv video-section flex justify-center py-5">
                        <video className="move-right mr-72 video-reflect xlMax:h-80" autoPlay loop muted>
                                <source src={codingVidBG} type="video/mp4" />
                        </video>
                        <video className="flex justify-center items-center absolute hp-video mdMax:h-72 mdMax:mt-5 xlMax:h-80" autoPlay loop muted>
                                <source src={codingVidBG} type="video/mp4" />
                        </video>
                        <video className="move-left ml-72 video-reflect xlMax:h-80" autoPlay loop muted>
                                <source src={codingVidBG} type="video/mp4" />
                        </video>
                    </div>
                </motion.div>
            </div>

            {/* container for two boxes */}
            <div className="flex  flex-col justify-center xlMin:justify-around xlMin:mx-52 xlMin:flex-row mb-20">
                {/* about me */}
                <div className="exp-conatiner-hp flex justify-center m-5 px-auto ">
                    <Link title="Alex Grimes' Work Experience" className="no-underline text-white" to="/experience">
                        {/* experience-hp */}
                        <motion.div className="h-80 w-96 rounded flex items-center p-3" style={{ backgroundImage: `url(${divWaterColor2})` }} whileHover={{ scale: 1.1 }}>
                            <h2 className="experience-title-hp text-lemonChiffon text-3xl">Read about how Alex became a Programmer and Other Experiences</h2>
                        </motion.div> 
                    </Link>
                </div>

                {/* experience */}
                <div className="exp-conatiner-hp text-center flex justify-center m-5 px-auto">
                    <Link title="Alex Grimes' About Me Page" className="no-underline text-black" to="/aboutme">
                        <motion.div className="  flex h-80 w-96 rounded xlMin:w-62 justify-center items-center p-3" style={{ backgroundImage: `url(${divWaterColor})` }} whileHover={{ scale: 1.1 }}>
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