import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from './Footer.js'
import codingVidBG from '../assets/CodingClearShort.mp4'
import darkWaterColor from '../assets/darkWaterColor.jpg'
import divWaterColor from '../assets/blue_purple.jpg'
import divWaterColor2 from '../assets/blue_purple_pink.jpg'
import purpleGrad from '../assets/dark_light_purple.jpg'
import flippedVid from '../assets/Flipped_coding_vid.mp4'

const HomePage = () => {

    const [hovered, setHovered] = useState(false);




    // useEffect (() => {
    //     window.scroll(0,0)
    // })

    return (
      <>
        {/* name and title */}
        <div className="mb-20 min-w-screen">
          <div
            className="bg-cover shadow-2xl"
            style={{ backgroundImage: `url(${darkWaterColor})` }}
          >
            <div
              id="intro_section"
              className=" py-52 flex items-center  justify-center"
            >
              <motion.div
                className="-mt-44 rounded px-6 max-w-4xl min-w-sm w-4/12 py-14 mdMax:px-8"
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <h1 className="font-titleName text-lemonChiffon text-center text-7xl row justify-center mdMax:text-5xl">
                  Alex Grimes
                </h1>
                <h2 className="description-title font-newsCycle text-[#77d8ff] text-center text-6xl mdMax:text-4xl">
                  Full Stack Developer
                </h2>
              </motion.div>
              <motion.div
                className="bg-[#2f2081] mx-10 p-10 mt-44 max-w-xl bg-opacity-50 rounded self-end interactive-div"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <h1 className="text-lemonChiffon text-xl">
                  A software engineer and full stack developer who writes
                  dynamic, well organized code.
                </h1>
                <h1 className="text-lemonChiffon text-xl mt-5">
                  Delve deeper by exploring this site's{" "}
                  <a
                    className="text-[#94e1ff] underline"
                    href="https://github.com/agrimes23/Portfolio-frontend"
                  >
                    code on GitHub
                  </a>
                </h1>
              </motion.div>
            </div>
          </div>

          {/* projects section with video mirroring */}
          {/* <div className="w-3/4 m-32 mx-auto py-32 rounded bg-codingDiv shadow-2xl mdMax:h-64 mdMax:mb-80 h-full">
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
            </div> */}

          {/* -------------------- New Video Section --------------------- */}

          <div className="w-screen max-h-screen mt-44 px-10 flex justify-center">
            {/* container for card */}
            <motion.div
              className="flex flex-row min-h-[500px] max-w-6xl rounded bg-gradient-to-t from-[#231d2c] to-[#4a356a] w-full bg-cover"
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              <div className="flex flex-col justify-around p-20 w-2/4">
                <h2 className="text-white text-3xl">
                  View Some of Alex's Latest Projects
                </h2>
                <div className="flex flex-col">
                  <motion.button
                    className="bg-lemonChiffon rounded my-3 w-60 py-3 font-bold"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    See Web Projects
                  </motion.button>
                  <motion.button
                    className="bg-lemonChiffon rounded my-3 w-60 py-3 font-bold "
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    See Mobile Projects
                  </motion.button>
                </div>
              </div>
              {/* video container */}
              <div className="bg-codingDiv h-[120px] mt-5 mx-auto">
                <video
                  className="w-[500px] shadow-2xl shadow-[#000000] object-fill"
                  autoPlay
                  loop
                  muted
                >
                  <source src={codingVidBG} type="video/mp4" />
                </video>
                <div className="w-[500px] h-[120px] flex z-10 absolute bg-gradient-to-t from-[#231d2c] reflect-div shadow shadow-[#000000]"></div>
                <video
                  className="w-[500px] h-[120px] absolute opacity-80 reflect-div transform object-fill"
                  autoPlay
                  loop
                  muted
                >
                  <source src={flippedVid} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
          {/* ----------------------------------------------- */}

          {/* container for two boxes */}
          <div className="flex flex-col justify-center xlMin:justify-around xlMin:mx-52 xlMin:flex-row mt-44 mb-44">
            {/* about me */}
            <div className="exp-conatiner-hp flex justify-center m-5 px-auto ">
              <Link
                title="Alex Grimes' Work Experience"
                className="no-underline text-white"
                to="/experience"
              >
                {/* experience-hp */}
                <motion.div
                  className="h-80 w-96 rounded flex items-center p-3"
                  style={{ backgroundImage: `url(${divWaterColor2})` }}
                  whileHover={{ scale: 1.1 }}
                >
                  <h2 className="experience-title-hp text-lemonChiffon text-3xl">
                    Read about how Alex became a Programmer and Other
                    Experiences
                  </h2>
                </motion.div>
              </Link>
            </div>

            {/* experience */}
            <div className="exp-conatiner-hp text-center flex justify-center m-5 px-auto">
              <Link
                title="Alex Grimes' About Me Page"
                className="no-underline text-black"
                to="/aboutme"
              >
                <motion.div
                  className="  flex h-80 w-96 rounded xlMin:w-62 justify-center items-center p-3"
                  style={{ backgroundImage: `url(${divWaterColor})` }}
                  whileHover={{ scale: 1.1 }}
                >
                  <h2 className=" text-lemonChiffon text-3xl px-10">
                    Still Curious? Read the About Me Page!
                  </h2>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );

}

export default HomePage;