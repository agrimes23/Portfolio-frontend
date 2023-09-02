import { useEffect } from "react";
import { motion } from "framer-motion";
import travelPlanImg from "../../images/TravelPlansScreenShot.PNG";
import WeatherApp from "../../images/WeatherApp.PNG";
import Footer from "../Footer.js";
import flowerForest from "../../assets/flower_bush.jpg";
import purpleGold from '../../assets/purple_gold.jpg'
import purpleWC from '../../assets/purpleWC2.jpg'
import purpleOnly from '../../assets/purpleonlyWatercolor.jpg'
import glitterold  from '../../assets/glitter_gold.jpg'

const WebProjects = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <>
      <div className="min-w-screen min-h-screen w-90 xlMax:m-0 pb-4 flex flex-col">
        <div
          className="flex w-full h-60 bg-cover"
          style={{ backgroundImage: `url(${purpleGold})` }}
        >
          <h1 className="my-auto ml-20 text-5xl font-bold text-white bg-[#000000] bg-opacity-40 p-8 rounded mdMax:mx-auto">
            Web Projects
          </h1>
        </div>

        {/* div for projects container */}
        <div className="my-28 py-5 mx-auto flex justify-center flex-col ">
          {/* first card */}
          <motion.div
            className="flex xlMax:flex-col xlMin:justify-around xlMax:items-center max-w-[1000px] mx-auto my-5 justify-center bg-cover rounded"
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <div className="px-3">
              <a
                className="text-decoration-none"
                href="https://travel-planning.herokuapp.com/"
              >
                <div className="border-2">
                  <img
                    className="flex-1 h-[300px] bg-cover"
                    src={travelPlanImg}
                    alt="card project img"
                  />
                </div>
              </a>
            </div>

            <div className="w-3/4 mdMin:max-h-80 py-3 px-3 xlMin:ml-3 xlMax:mx-3 my-3 flex items-center self-center rounded border-2 row bg-gradient-to-t to-[#2d1640] from-[#684f7d] text-white" >
              <div className="flex justify-between py-3 xlMax:flex-col xlMax:items-center">
                <h3 className="text-2xl xlMax:m-2 xlMax:text-center">Travel Plans Web App</h3>
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
                You can plan your trips by finding transportation, hotels, and
                activities, and mixing and matching until you find the best
                trip!
              </h5>
              <h5 className="text-base py-3">
                React, Bootstrap CSS, Java, Spring Boot, JWT Auth
              </h5>
            </div>
          </motion.div>

          {/* second card */}
          <motion.div
            className="flex xlMin:flex-row-reverse xlMax:flex-col xlMin:justify-around xlMax:items-center max-w-[1000px] mx-auto my-5 justify-center"
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <div className="px-3">
              <a
                className="text-decoration-none"
                href="https://evening-reef-65787.herokuapp.com/"
              >
                <div className="border">
                  <img
                    className="flex-1 h-[300px] bg-cover"
                    src={WeatherApp}
                    alt="card project img"
                  />
                </div>
              </a>
            </div>

            <div className="w-3/4 mdMin:max-h-80 px-3 xlMin:ml-3 xlMax:mx-3 my-3 flex items-center self-center rounded border-2 row bg-gradient-to-t to-[#2d1640] from-[#684f7d] text-white">
              <div className="flex justify-between py-3 xlMax:flex-col xlMax:items-center">
                <h3 className="text-2xl xlMax:m-2 xlMax:text-center">Weather Notes Web App</h3>
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
                You can plan your trips by finding transportation, hotels, and
                activities, and mixing and matching until you find the best
                trip!
              </h5>
              <h5 className="text-base py-3">
                React, Bootstrap CSS, Python, Django
              </h5>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <h3 className="text-xl ">
            See my github: <a href="https://github.com/agrimes23">agrimes23</a>
          </h3>
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
