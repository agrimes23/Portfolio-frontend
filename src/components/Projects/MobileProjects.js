import { useState, useEffect } from "react";
import RNWeather from "../../assets/ReactNativeWeatherVid.mp4";
import RNCamera from "../../assets/InsuranceCardVid.mp4";
import stars from "../../assets/starry_sky.jpg";
import { motion } from "framer-motion";
import greenGold from "../../assets/green_gold.jpg"

const MobileProjects = () => {
  // TODO:
  // // Record videos of clicking on features of the mobile app (per project, which there's probably 2)
  // // Change hover animation to framer motion (can just fix errors for now)
  // // Format/Styling for mobile: should videos take up whole/most of the screen?
  // // Eventually reformat to
  // // // tailwind css
  // // // typescript

  return (
    <>
      {/* Page Container / Fade-In*/}
      <div className=" min-w-screen min-h-screen w-90 xlMax:m-0 pb-4 flex flex-col">
        {/* Page title */}
        <div
          className="flex w-full h-60 bg-cover smMax:h-72"
          style={{ backgroundImage: `url(${greenGold})` }}
        >
          <h1 className="my-auto ml-20 text-5xl font-bold bg-darkBlueGreen bg-opacity-90 text-lemonChiffon p-8 rounded mdMax:mx-auto">
            Mobile Projects (React Native)
          </h1>
        </div>

        {/* Mobile Projects Card Container */}
        <div className="my-20 fadeInTop mx-auto ">
          {/* first card */}
          <motion.div
            className="flex xlMax:flex-col xlMin:justify-around xlMax:items-center max-w-[1000px] mx-auto justify-center"
            whileHover={{ scale: 1.04 }}
          >
            <div className="px-3">
              <video className="max-w-[250px] " controls>
                <source src={RNCamera} type="video/mp4" />
              </video>
            </div>
 
            <div className="w-2/4 max-h-80 px-3 my-3 flex items-center self-center rounded border-2 row text-white bg-[#07261c] " >
              <div className="flex justify-between py-3">
                <h3 className="text-2xl">Page with Camera Feature</h3>
                <div className="flex flex-row">
                  <h5 className="flex items-center ">View Code</h5>
                  <a
                    className="flex items-center mx-2"
                    href="https://github.com/agrimes23/ReactNativeUseCamera"
                  >
                    <i className="fa-brands fa-github fa-2xl"></i>
                  </a>
                </div>
              </div>
              <h5 className="text-base py-3">
                Testing out camera functionality on React Native where users can
                add photos from their phone gallery or take a picture with their
                phone camera. Also made a modal slide up from the bottom of the
                screen asking the users how they want to import their photos
              </h5>
              <h5 className="text-base py-3">
                React Native, Typescript, Nativewind CSS, React Native Image
                Picker
              </h5>
            </div>
          </motion.div>

          {/* second card */}
          <motion.div
            className="flex xlMax:flex-col xlMin:justify-around xlMin:flex-row-reverse xlMax:items-center p-4 w-[1000px] mx-auto justify-center"
            whileHover={{ scale: 1.04 }}
          >
            <div className="px-5">
              <video className="max-w-[250px] " controls>
                <source src={RNWeather} type="video/mp4" />
              </video>
            </div>

            <div className="w-2/4 max-h-80 px-3 ml-3 my-3 flex items-center self-center rounded border-2 row text-white bg-[#07261c]">
              <div className="flex justify-between py-3">
                <h3 className="text-2xl">Mobile Weather App</h3>
                <div className="flex flex-row hover:text-darkBlueGreen">
                  <h5 className="flex items-center">View Code</h5>
                  <a
                    className="flex items-center mx-2"
                    href="https://github.com/agrimes23/ReactNativeWeatherBack"
                  >
                    <i className="fa-brands fa-github fa-2xl"></i>
                  </a>
                </div>
              </div>
              <h5 className="text-base py-3">
                Testing out different React Native features like slider, React
                Native Router, BottomTabs, and routing a simple backend with the
                mobile app
              </h5>
              <h5 className="text-base py-3">
                React Native, Typescript, Nativewind CSS, React Navigation,
                Node.js, Express, PostreSQL
              </h5>
            </div>
          </motion.div>
        </div>

        {/* Github link */}
        <div className="text-center my-5">
          <h3 className="text-xl ">
            See my github: <a href="https://github.com/agrimes23">agrimes23</a>
          </h3>
        </div>
      </div>

      <footer className="footer footer-projects bg-[#0e2038] relative p-5 text-center">
        <a className="py-5" href="https://github.com/agrimes23">
          <i
            className="footer-text fa-brands fa-github text-white px-5"
            title="Github"
          ></i>
        </a>
        <a className="py-5" href="https://www.linkedin.com/in/alex-grimes-dev/">
          <i
            className="footer-text fa-brands fa-linkedin text-white px-5"
            title="LinkedIn"
          ></i>
        </a>
        <a className="py-5" href="mailto: alexgrimes23@gmail.com">
          <i
            className="footer-text fa-regular fa-envelope text-white px-5"
            title="Email"
          ></i>
        </a>
      </footer>
    </>
  );
};

export default MobileProjects;
