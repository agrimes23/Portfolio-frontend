import React, {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from './Footer.js'
import codingVidBG from '../assets/CodingClearShort.mp4'
import bgSplash from '../assets/SplashOfPaint.jpg'
import treeWater from '../assets/baywithTrees.jpg'
import colorGrad from '../assets/watercolor_gradient.jpg'
import pyGrad from '../assets/purp_yellow_gradient.jpg'

const HomePage = () => {

    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    // Update the tilt values on mousemove
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
    
        // Calculate tilt values based on mouse movement direction
        const xTilt = ((clientX / windowWidth) * 2 - 1) * 30; // Exaggerated tilt factor
        const yTilt = ((clientY / windowHeight) * 2 - 1) * 30; // Exaggerated tilt factor
    
        setTilt({ x: xTilt, y: yTilt });
      };
  
      useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

    // useEffect (() => {
    //     window.scroll(0,0)
    // })

    // box-shadow: 0 0 8px 8px white inset;

    return (
        <>
            {/* name and title */}
           <div className="pb-20 min-w-screen bg-lemonChiffon">
            <motion.div className="bg-cover h-full py-14 from-transparent border-opacity-25" style={{ backgroundImage: `url(${pyGrad})` }} >
                <div id="intro_section" className=" py-60 flex flex-col items-center text-center">
                        <motion.div className="border-navyBlue border-5 rounded max-w-5xl w-1/2 mx-auto p-10 mdMax:px-5" style={{
                            transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                            }}>
                            <h1 className="font-titleName text-navyBlue text-7xl row justify-center mdMax:text-5xl">Alex Grimes</h1>
                            <h2 className="description-title font-newsCycle text-teal text-6xl mdMax:text-4xl">Full-Stack Developer | Web Developer</h2>
                        </motion.div>
                        
                </div>
            </motion.div>

            {/* projects section with video mirroring */}
            {/* <div className="projects-hp my-28 mdMax:h-64 bg-codingDiv h-100">
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
            </div> */}

            {/* on scroll, appear */}
            <div className="h-screen flex px-8 items-center">
                <motion.div className="max-w-6xl border-4 border-navyBlue h-1/2 mx-auto bg-gradient-to-r from-navyBlue shadow-2xl p-5 flex justify-around rounded" initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                >
                    {/* text */}
                    <div className="text-white text-4xl w-4/12">
                        <h2>View Alex's Coding Projects</h2>
                    </div>
                    {/* video? */}
                    <div className="">
                        <video className="flex h-60 mdMax:mt-5 " autoPlay loop muted>
                                <source src={codingVidBG} type="video/mp4" />
                        </video>
                    </div>
                </motion.div>
            </div>

            {/* container for two boxes */}
            <motion.div className="flex xlMin:flex-row flex-col justify-center mx-20 mb-20 smMax:mx-5" initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}>
                {/* about me */}
                <div className="exp-conatiner-hp my-5 px-auto ">
                    <Link title="Alex Grimes' Work Experience" className="no-underline text-white" to="/experience">
                        {/* experience-hp */}
                        <motion.div className="bg-coral h-80 rounded xlMin:w-4/6 flex items-center p-3" whileHover={{ scale: 1.1 }}>
                            <h2 className="experience-title-hp text-black text-3xl">Read about how Alex became a Programmer and Other Experiences</h2>
                        </motion.div> 
                    </Link>
                </div>

                {/* experience */}
                <div className="exp-conatiner-hp text-center my-5 px-auto">
                    <Link title="Alex Grimes' About Me Page" className="no-underline text-black" to="/aboutme">
                        <motion.div className=" bg-navyBlue flex h-80 rounded xlMin:w-62 justify-center items-center p-3" whileHover={{ scale: 1.1 }}>
                            <h2 className=" text-white text-3xl px-10">Still Curious? Read the About Me Page!</h2>
                        </motion.div> 
                    </Link>
                </div>
            </motion.div>
            </div>
            <Footer/>
        </>
    )

}

export default HomePage;