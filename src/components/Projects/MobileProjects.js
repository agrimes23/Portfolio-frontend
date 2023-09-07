import React from "react";
import TestThumbnail from '../../assets/TestLabThumbnail.PNG'
import RiseThumbnail from '../../assets/RiseThumbnail.PNG'
import CamThumbnail from '../../assets/CameraThumbnail.PNG'
import WeatherThumbnail from '../../assets/WeatherThumbnail.PNG'
import { motion } from "framer-motion";
import greenGold from "../../assets/green_gold.jpg"

const MobileProjects = () => {
  // TODO:
  // // Eventually reformat to
  // // // tailwind css
  // // // typescript

  return (
    <>
      {/* Page Container */}
      <div className=" min-w-screen min-h-screen w-90 xlMax:m-0 pb-4 flex flex-col">
        {/* Page title */}
        <div
          className="flex w-full h-60 bg-cover smMax:h-72"
          style={{ backgroundImage: `url(${greenGold})` }}
        >
          <h1 className="my-auto ml-20 smMin:text-5xl smMax:text-4xl font-bold bg-darkBlueGreen bg-opacity-90 text-lemonChiffon p-8 rounded mdMax:mx-auto">
            Mobile Projects (React Native)
          </h1>
        </div>

        {/* motion a */}
        <a
          href="https://github.com/agrimes23"
          className="flex flex-row text-white bg-gradient-to-r from-codingDiv bg-[#414141] w-60 h-12 rounded mx-auto justify-center mt-12"
          // whileHover={{ scale: 1.04 }}
        >
          <h3 className="self-center">See Alex's GitHub</h3>
          <i className="fa-brands fa-github fa-2xl ml-2 self-center"></i>
        </a>

        {/* Mobile Projects Card Container */}
        <div className="mt-12 mb-52 mx-auto ">
          {/* first card */}

          {/* motion div */}
          <div
            className="w-full max-w-[1300px] my-28 "
            // initial={{ y: -200, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ duration: 2 }}
          >
            {/* motion div */}
            <div
              // whileHover={{ scale: 1.04 }}
              className="flex mdMin:flex-row-reverse -z-10 mdMin:w-11/12 lgMin:max-h-80 mdMax:flex-col lgMax:h-3/4 lgMax:p-7  mdMax:self-center mdMax:w-full  mx-auto bg-gradient-to-t to-[#07261c] from-[#29463d] rounded items-center justify-center my-auto xlMax:flex-col xlMin:justify-around xlMax:items-center"
            >
              <div className="lgMin:px-5">
                {/* <video className="max-w-[250px] h-[444px]" poster={TestThumbnail} preload="none" controls>
                  <source src={RNTestLab} type="video/mp4" />
                </video> */}
                <div className="bg-codingDiv w-[250px] h-[444px] rounded ">
                  <h4 className="flex justify-center items-center h-full text-white font-bold text-2xl">
                    Video Coming Soon
                  </h4>
                </div>
              </div>

              <div className="w-2/4 mdMin:max-h-80 px-3 lgMin:ml-3 my-3 flex lgMin:self-center lgMax:self-start mdMax:self-center mdMax:w-full row text-white ">
                <div className="flex justify-between py-3 lgMax:flex-col">
                  <h3 className="text-2xl mdMax:self-center">
                    Community Test Lab App
                  </h3>
                  <div className="flex flex-row lgMax:pt-5 mdMax:self-center">
                    <h5 className="flex items-center ">View Code</h5>
                    <a
                      className="flex items-center mx-2"
                      href="https://github.com/Personal-Finance-Credit-Score/creditapp"
                    >
                      <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                  </div>
                </div>
                <h5 className="text-base py-2">
                  As a 12-week sprint through The Opportunity Project, my team
                  and I created this at-home covid testing app. I created an Api
                  Service Class to have api calls organized in one place, and
                  React Context so user information will be passed through
                  screens without having to resort to props. Users can create an
                  account or report anonymously. The data users submit to our
                  backend is encrypted, and we explain how their data is used
                  before the create an account.
                </h5>
                <h5 className="text-base py-1">
                  React Native, TypeScript, Nativewind CSS, Node.js, Express,
                  SQL, Sequelize, Crypto
                </h5>
              </div>
            </div>
          </div>

          {/* second card */}
          {/* motion div */}
          <div
            className="w-full max-w-[1300px] mt-44 mb-28 "
            // initial={{ y: -200, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ duration: 2 }}
          >
            {/* motion div */}
            <div
              // whileHover={{ scale: 1.04 }}
              className="flex mdMin:flex-row -z-10 mdMin:w-11/12 lgMin:max-h-80 mdMax:flex-col lgMax:h-3/4 lgMax:p-7  mdMax:self-center mdMax:w-full  mx-auto bg-gradient-to-t to-[#07261c] from-[#29463d] rounded items-center justify-center my-auto xlMax:flex-col xlMin:justify-around xlMax:items-center"
            >
              <div className="lgMin:px-5">
                {/* <video className="max-w-[250px] " poster={RiseThumbnail} preload="none" controls>
                  <source src={RNCredit} type="video/mp4" />
                </video> */}
                <div className="bg-codingDiv w-[250px] h-[444px] rounded ">
                  <h4 className="flex justify-center items-center h-full text-white font-bold text-2xl">
                    Video Coming Soon
                  </h4>
                </div>
              </div>

              <div className="w-2/4 mdMin:max-h-80 px-3 lgMin:ml-3 my-3 flex lgMin:self-center lgMax:self-start mdMax:self-center mdMax:w-full row text-white ">
                <div className="flex justify-between py-3 lgMax:flex-col">
                  <h3 className="text-2xl mdMax:self-center">
                    Rise Credit Score App
                  </h3>
                  <div className="flex flex-row lgMax:pt-5 mdMax:self-center">
                    <h5 className="flex items-center ">View Code</h5>
                    <a
                      className="flex items-center mx-2"
                      href="https://github.com/Personal-Finance-Credit-Score/creditapp"
                    >
                      <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                  </div>
                </div>
                <h5 className="text-base py-3">
                  Produced this credit score app from a 3-day hackathon. Users
                  can see what their credit score is and how it's calculated.
                  There is an offers tab that shows loan offers based on their
                  credit score.
                </h5>
                <h5 className="text-base py-3">
                  React Native, Nativewind CSS, Supabase, React Native bottom
                  tabs
                </h5>
              </div>
            </div>
          </div>

          {/* third card */}
          {/* motion div */}
          <div
            className="w-full max-w-[1300px] mt-44 mb-28 "
            // initial={{ y: -200, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ duration: 2 }}
          >

            {/* motion div */}
            <div
              // whileHover={{ scale: 1.04 }}
              className="flex mdMin:flex-row-reverse -z-10 mdMin:w-11/12 lgMin:max-h-80 mdMax:flex-col lgMax:h-3/4 lgMax:p-7  mdMax:self-center mdMax:w-full  mx-auto bg-gradient-to-t to-[#07261c] from-[#29463d] rounded items-center justify-center my-auto xlMax:flex-col xlMin:justify-around xlMax:items-center"
            >
              <div className="lgMin:px-5">
                {/* <video className="max-w-[250px] h-[444px]" poster={CamThumbnail} preload="none" controls>
                  <source src={RNCamera} type="video/mp4" />
                </video> */}
                <div className="bg-codingDiv w-[250px] h-[444px] rounded ">
                  <h4 className="flex justify-center items-center h-full text-white font-bold text-2xl">
                    Video Coming Soon
                  </h4>
                </div>
              </div>

              <div className="w-2/4 mdMin:max-h-80 px-3 lgMin:ml-3 my-3 flex lgMin:self-center lgMax:self-start mdMax:self-center mdMax:w-full row text-white ">
                <div className="flex justify-between py-3 lgMax:flex-col">
                  <h3 className="text-2xl mdMax:self-center">
                    Page with Camera Feature
                  </h3>
                  <div className="flex flex-row lgMax:pt-5 mdMax:self-center">
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
                  Testing out camera functionality where users can add photos
                  from phone gallery or take a picture with the phone's camera.
                  Users can choose how to import their photos.
                </h5>
                <h5 className="text-base py-3">
                  React Native, Typescript, Nativewind CSS, React Native Image
                  Picker
                </h5>
              </div>
            </div>
          </div>

          {/* fourth card */}
          {/* motion div */}
          <div
            className="w-full max-w-[1300px] mt-44"
            // initial={{ y: -200, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ duration: 2 }}
          >
            {/* motion div */}
            <div
              // whileHover={{ scale: 1.04 }}
              className="flex mdMin:flex-row mdMax:flex-col mdMin:w-11/12 -z-10 lgMin:max-h-80 lgMax:h-3/4 lgMax:p-5 mx-auto rounded bg-gradient-to-t to-[#07261c] from-[#29463d] items-center justify-center my-auto xlMax:flex-col xlMin:justify-around xlMax:items-center"
            >
              <div className="lgMin:px-5 ">
                {/* <video className="max-w-[250px] h-[444px]" poster={WeatherThumbnail} preload="none" controls>
                  <source src={RNWeather} type="video/mp4" />
                </video> */}
                <div className="bg-codingDiv w-[250px] h-[444px] rounded ">
                  <h4 className="flex justify-center items-center h-full text-white font-bold text-2xl">
                    Video Coming Soon
                  </h4>
                </div>
              </div>

              <div className="w-2/4 mdMin:max-h-80 px-3 lgMin:mr-3 my-3 flex lgMin:self-center lgMax:self-start mdMax:self-center mdMax:w-full row text-white ">
                <div className="flex justify-between py-3 lgMax:flex-col">
                  <h3 className="text-2xl mdMax:self-center">
                    Mobile Weather App
                  </h3>
                  <div className="flex flex-row hover:text-darkBlueGreen lgMax:pt-5 mdMax:self-center">
                    <h5 className="flex items-center ">View Code</h5>
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
                  Native Router, BottomTabs, and routing a simple backend with
                  the mobile app
                </h5>
                <h5 className="text-base py-3">
                  React Native, Typescript, Nativewind CSS, React Navigation,
                  Node.js, Express, PostreSQL
                </h5>
              </div>
            </div>
          </div>
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
