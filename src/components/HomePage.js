import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from './Footer.js'
import codingVidBG from '../assets/CodingVid.mp4'
import darkWaterColor from '../assets/darkWaterColor.jpg'
import divWaterColor from '../assets/blue_purple.jpg'
import divWaterColor2 from '../assets/blue_purple_pink.jpg'
// import flippedVid from '../assets/Flipped_coding_vid.mp4'

const HomePage = () => {

    // useEffect (() => {
    //     window.scroll(0,0)
    // })

    return (
      <>
        {/* name and title */}
        <div className="mb-20 min-w-screen w-full">
          <div
            className="bg-cover shadow-2xl px-5"
            style={{ backgroundImage: `url(${darkWaterColor})` }}
          >
            <div
              id="intro_section"
              className="py-52 flex items-center justify-center xlMax:flex-col"
            >

            {/* Name & Title */}
              <motion.div
                className="-mt-44 rounded max-w-4xl w-4/12 py-14 "
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <h1 className="font-titleName text-lemonChiffon text-center text-7xl row justify-center mdMax:text-5xl">
                  Alex Grimes
                </h1>
                <h2 className="font-newsCycle text-[#77d8ff] text-center text-6xl mdMax:text-4xl">
                  Full Stack Developer
                </h2>
              </motion.div>

              {/* Quick Intro */}
              <motion.div
                className="bg-[#2f2081] smMin:mx-10 smMin:p-10 xlMin:mt-44 max-w-xl bg-opacity-50 rounded xlMin:self-end smMax:mx-0 smMax:p-6"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <h1 className="text-lemonChiffon text-xl">
                A software engineer and full stack developer who values dynamic, well organized code.
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
          {/* -------------------- Video Section --------------------- */}

          <div className="w-screen max-h-screen mt-44 px-10 flex justify-center">
            {/* container for card */}
            <motion.div
              className="flex 2xlMin:min-h-[500px] 2xlMax:min-h-[700px] max-w-6xl rounded bg-gradient-to-t from-[#231d2c] to-[#4a356a] w-full bg-cover pr-3 2xlMax:flex-col 2xlMin:flex-row "
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              <div className="flex flex-col justify-around 2xlMin:p-20 2xlMax:pt-20 2xlMax:w-3/4 2xlMax:text-center 2xlMin:w-2/4 2xlMax:mx-auto">
                <h2 className="text-white text-3xl">
                  View Some of Alex's Latest Projects
                </h2>
                <div className="flex 2xlMin:flex-col 2xlMax:self-center xlMax:flex-col">
                  <motion.button
                    className="bg-lemonChiffon rounded my-3 w-60 py-3 font-bold 2xlMax:mx-3"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    See Web Projects
                  </motion.button>
                  <motion.button
                    className="bg-lemonChiffon rounded my-3 w-60 py-3 font-bold 2xlMax:mx-3"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    See Mobile Projects
                  </motion.button>
                </div>
              </div>
              {/* video container */}
              <div className="h-[120px] mt-24 mx-auto">
                <video
                  className="xlMin:w-[500px] xlMax:w-[300px] shadow-2xl shadow-[#000000] object-fill"
                  autoPlay
                  loop
                  muted
                >
                  <source src={codingVidBG} type="video/mp4" />
                </video>
                {/* <div className="xlMin:w-[500px] xlMin:h-[120px] xlMax:w-[300px] flex z-10 absolute bg-gradient-to-t from-[#231d2c] translate-x-[-60px] skew-x-[135deg] mdMax:hidden shadow shadow-[#000000]"></div>
                <video
                  className="xlMin:w-[500px] xlMin:h-[120px] xlMax:w-[300px] xlMax:h-[70px] absolute opacity-80 xlMin:translate-x-[-60px] xlMin:skew-x-[135deg] xlMax:skew-x-[135deg] xlMax:translate-x-[-35px] mdMax:hidden transform object-fill"
                  autoPlay
                  loop
                  muted
                >
                  <source src={flippedVid} type="video/mp4" />
                </video> */}
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
                  className="h-80 w-96 rounded smMax:w-80 flex items-center p-3"
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
                  className="flex h-80 w-96 rounded smMax:w-80 justify-center items-center p-3"
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