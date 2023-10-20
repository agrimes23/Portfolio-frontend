import { useEffect } from "react";
import { motion } from "framer-motion";
import travelPlanImg from "../../images/TravelPlansScreenShot.PNG";
import WeatherApp from "../../images/WeatherApp.PNG";
import FeelingFriends from "../../images/MindfulJournal.PNG"
import Footer from "../Footer.js";
import purpleGold from '../../assets/purple_gold.jpg'


const WebProjects = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <>
      <div className="min-w-screen min-h-screen w-90 xlMax:m-0 pb-4 flex flex-col">
        {/* header */}
        <div
          className="flex w-full h-60 bg-cover"
          style={{ backgroundImage: `url(${purpleGold})` }}
        >
          <h1 className="my-auto ml-20 smMin:text-5xl smMax:text-4xl font-bold text-white bg-[#000000] bg-opacity-40 p-8 rounded mdMax:mx-auto">
            Web Projects
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

        {/* div for projects container */}
        <div className="mt-16 mb-28 py-5 mx-auto flex-col w-screen max-w-[1600px]">
              
        {/* first card */}

        <div
            className="w-full mb-40"
            // initial={{ y: -200, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ duration: 2 }}
          >

            {/* motion div */}
            <div
              // whileHover={{ scale: 1.04 }}
              className="flex 2xlMin:flex-row-reverse 2xlMin:w-3/4 2xlMin:max-h-80 mx-auto -z-10  h-full rounded bg-gradient-to-t to-[#2d1640] from-[#684f7d] items-center justify-center 2xlMax:w-2/4 lgMax:w-full 2xlMax:flex-col 2xlMax:py-5 my-auto xlMax:flex-col xlMin:justify-around xlMax:items-center"
            >
              <div className="px-3">
                <a
                  className="text-decoration-none"
                  href="https://mindful-journal.vercel.app/signup"
                >
                  <div className="">
                    <img
                      className="flex-1 xlMax:h-[200px] xlMin:h-[350px] bg-cover border-1 border-[#2d1640]"
                      src={FeelingFriends}
                      alt="Mindful Jouranl EdTech Home Page"
                    />
                  </div>
                </a>
              </div>

              <div className="2xlMin:w-3/4 mdMin:max-h-80 px-3 m-2 xlMax:mx-3  flex items-center self-center row text-white">
                <div className="flex justify-between py-3 xlMax:flex-col xlMax:items-center">
                  <h3 className="text-2xl xlMax:m-2 xlMax:text-center">
                    Feeling Friends/Mindful Journal App
                  </h3>
                  <div className="flex xlMin:flex-row xlMax:m-2">
                    <a
                      className="flex items-center mx-2"
                      href="https://github.com/Noordibou/Mindful-Journal"
                    >
                      <h5 className="flex items-center ">View Code</h5>

                      <i className="fa-brands fa-github fa-2xl ml-2"></i>
                    </a>
                    <a
                      className="flex items-center mx-2"
                      href="https://mindful-journal.vercel.app/signup"
                    >
                      <h5 className="flex items-center ">View Site</h5>
                      <i className="fa-solid fa-up-right-from-square flex items-center ml-2"></i>
                    </a>
                  </div>
                </div>
                <h5 className="text-base py-3">
                  Edtech Accessibility focused app that helps ease of communication between the student and the teacher. The app aids the student in understanding their feelings and how to manage them while also setting learning goals for the day. 
                </h5>
                <h5 className="text-base py-3">
                  React, Tailwind CSS, Express, Node, Mongoose, MongoDB
                </h5>
              </div>
            </div>
          </div>


          {/* second card */}
          
          {/* motion div */}
          <div
            className="w-full mt-18 "
            // initial={{ y: -200, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ duration: 2 }}
          >

            {/* motion div */}
            <div
              // whileHover={{ scale: 1.04 }}
              className="flex 2xlMin:flex-row 2xlMin:w-3/4 2xlMin:max-h-80 mx-auto -z-10  h-full rounded bg-gradient-to-t to-[#2d1640] from-[#684f7d] items-center justify-center 2xlMax:w-2/4 lgMax:w-full 2xlMax:flex-col 2xlMax:py-5 my-auto xlMax:flex-col xlMin:justify-around xlMax:items-center"
            >
              <div className="px-3">
                <a
                  className="text-decoration-none"
                  href="https://travel-planning.herokuapp.com/"
                >
                  <div className="border-2">
                    <img
                      className="flex-1 xlMax:h-[200px] xlMin:h-[350px] bg-cover"
                      src={travelPlanImg}
                      alt="Travel Planner Home Page"
                    />
                  </div>
                </a>
              </div>

              <div className="2xlMin:w-3/4 mdMin:max-h-80 py-3 m-2 px-3 xlMax:mx-3 flex items-center self-center row text-white">
                <div className="flex justify-between py-3 xlMax:flex-col xlMax:items-center">
                  <h3 className="text-2xl xlMax:m-2 xlMax:text-center">
                    Travel Plans Web App
                  </h3>
                  <div className="flex xlMin:flex-row xlMax:m-2">
                    <a
                      className="flex items-center mx-2"
                      href="https://github.com/agrimes23/travel-plan-frontend"
                    >
                      <h5 className="flex items-center ">View Code</h5>

                      <i className="fa-brands fa-github fa-2xl ml-2"></i>
                    </a>
                    <a
                      className="flex items-center mx-2"
                      href="https://travel-planning.herokuapp.com/"
                    >
                      <h5 className="flex items-center ">View Site</h5>
                      <i className="fa-solid fa-up-right-from-square flex items-center ml-2"></i>
                    </a>
                  </div>
                </div>
                <h5 className="text-base py-3">
                  Plan your trips by finding transportation, hotels, and
                  activities, and mixing and matching until you find the best
                  trip!
                </h5>
                <h5 className="text-base py-3">
                  React, Bootstrap CSS, Java, Spring Boot, JWT Auth
                </h5>
              </div>
            </div>
          </div>

          {/* third card */}

          {/* motion div */}
          <div
            className="w-full mt-44"
            // initial={{ y: -200, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ duration: 2 }}
          >

            {/* motion div */}
            <div
              // whileHover={{ scale: 1.04 }}
              className="flex 2xlMin:flex-row-reverse 2xlMin:w-3/4 2xlMin:max-h-80 -z-10 mx-auto rounded bg-gradient-to-t to-[#2d1640] from-[#684f7d] items-center justify-center my-auto 2xlMax:w-2/4 lgMax:w-full 2xlMax:flex-col 2xlMax:py-5 xlMin:justify-around xlMax:items-center"
            >
              <div className="px-3">
                <a
                  className="text-decoration-none"
                  href="https://evening-reef-65787.herokuapp.com/"
                >
                  <div className="border">
                    <img
                      className="flex-1 xlMax:h-[200px] xlMin:h-[350px] bg-cover"
                      src={WeatherApp}
                      alt="Weather App Home Page"
                    />
                  </div>
                </a>
              </div>

              <div className="2xlMin:w-3/4 mdMin:max-h-80 px-3 m-2 xlMax:mx-3  flex items-center self-center row text-white">
                <div className="flex justify-between py-3 xlMax:flex-col xlMax:items-center">
                  <h3 className="text-2xl xlMax:m-2 xlMax:text-center">
                    Weather Notes Web App
                  </h3>
                  <div className="flex xlMin:flex-row xlMax:m-2">
                    <a
                      className="flex items-center mx-2"
                      href="https://github.com/agrimes23/weather_frontend"
                    >
                      <h5 className="flex items-center ">View Code</h5>

                      <i className="fa-brands fa-github fa-2xl ml-2"></i>
                    </a>
                    <a
                      className="flex items-center mx-2"
                      href="https://evening-reef-65787.herokuapp.com/"
                    >
                      <h5 className="flex items-center ">View Site</h5>
                      <i className="fa-solid fa-up-right-from-square flex items-center ml-2"></i>
                    </a>
                  </div>
                </div>
                <h5 className="text-base py-3">
                  Check the weather of any city in the world, and save city's to
                  the dashboard so you can write notes and check up-to-date
                  weather-related info for each saved city.
                </h5>
                <h5 className="text-base py-3">
                  React, Bootstrap CSS, Python, Django
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer/> */}
      <footer className="footer footer-projects relative bg-[#0e2038] p-5 text-center">
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

export default WebProjects;
