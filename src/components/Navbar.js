import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Resume from "../assets/Alexandra_Grimes_Resume.pdf"
import pyGrad from '../assets/purp_yellow_gradient.jpg'


const Navbar = () => {

    const [showTab, setShowTab] = useState("d-none")
    const navigate = useNavigate();

    const setDisplayTab = () => {
        if (showTab === "d-none") { 
            setShowTab("d-flex")
        } else if (showTab === "d-flex") {
            setShowTab("d-none")
        }
    }

    const redirectAB = () => {
        setShowTab("d-none")
        navigate("/aboutme")
    }

    const redirectWP = () => {
        setShowTab("d-none")
        navigate("/webprojects")
    }

    const redirectMP = () => {
        setShowTab("d-none")
        navigate("/mobileprojects")
    }

    const redirectE = () => {
        setShowTab("d-none")
        navigate("/experience")
    }

  return (
    <>
      <nav className="navbar bg-transparent sticky-top p-4 d-flex columnnavbar bg-cover" style={{ backgroundImage: `url(${pyGrad})` }} >
        <div className="flex flex-row">
          <button className="text-decoration-none" onClick={() => navigate("/")}>
            <h1
              className="nav-home"
              title="Home Page"
              alt="logo-map-planner-img"
            >
              AG
            </h1>
          </button>
        </div>
        <div className="lg-screen-nav flex 2xlMax:hidden justify-end">
          <div className="flex flex-row navbar-nav navbar-right text-white mx-3">
            <div className="my-auto">
              <label htmlFor="download resume" />
              <a
                className="text-decoration-none button py-3 px-3 mx-4"
                href={Resume}
                download="Alexandra_Grimes_Resume.pdf"
                target="_blank"
              >
                Download Resume
              </a>
            </div>
            <label htmlFor="about me"/>
              <motion.button className="nav-item nav-item-area rounded p-4" onClick={() => navigate("/aboutme")} initial={{ top: '-10%', bottom: '-40%', transition: {duration: 0.5, ease: "all ease"} }}
              whileHover={{
                opacity: 1,
                left: 0,
                right: 0,
                transition: { duration: 0.5, ease: 'easeOut' },
                backgroundColor: '#0d0d52',
                color: 'white',
              }}>
                About Me
              </motion.button>
            <label htmlFor="web projects"/>
              <motion.button className="nav-item nav-item-area rounded p-4" onClick={() => navigate("/webprojects")} initial={{ top: '-10%', bottom: '-40%', transition: {duration: 0.5, ease: "all ease"} }}
              whileHover={{
                opacity: 1,
                left: 0,
                right: 0,
                transition: { duration: 0.5, ease: 'easeOut' },
                backgroundColor: '#0d0d52',
                color: 'white',
              }}>
                Web Projects
              </motion.button>
            <label htmlFor="web projects"/>
              <motion.button className="nav-item nav-item-area rounded p-4" onClick={() => navigate("/mobileprojects")} initial={{ top: '-10%', bottom: '-40%', transition: {duration: 0.5, ease: "all ease"} }}
              whileHover={{
                opacity: 1,
                left: 0,
                right: 0,
                transition: { duration: 0.5, ease: 'easeOut' },
                backgroundColor: '#0d0d52',
                color: 'white',
              }}>
                Mobile Projects
              </motion.button>
            <label htmlFor="experience"/>
              <motion.button 
              className="nav-item nav-item-area rounded p-4"
              onClick={() => navigate("/experience")}
              initial={{ top: '-10%', bottom: '-40%', transition: {duration: 0.5, ease: "all ease"} }}
              whileHover={{
                opacity: 1,
                left: 0,
                right: 0,
                transition: { duration: 0.5, ease: 'easeOut' },
                backgroundColor: '#0d0d52',
                color: 'white',
              }}
              >
                Experience
              </motion.button>
          </div>
        </div>
        <div className="sm-screen-nav hidden 2xlMax:flex">
          <a onClick={setDisplayTab}>
            <i className="fa-solid fa-bars" />
          </a>
        </div>
      </nav>
      <div className={showTab}>
        <div className="ham-tab hidden 2xlMax:flex NavTop flex-col py-5 text-center">
          <a
            className="sm-nav-item text-decoration-none m-auto text-white p-4"
            onClick={redirectAB}
          >
            About Me
          </a>
          <a
            className="sm-nav-item text-decoration-none m-auto text-white p-4"
            onClick={redirectWP}
          >
            Web Projects
          </a>
          <a
            className="sm-nav-item text-decoration-none m-auto text-white p-4"
            onClick={redirectMP}
          >
            Mobile Projects
          </a>
          <a
            className="sm-nav-item text-decoration-none m-auto text-white p-4"
            onClick={redirectE}
          >
            Experience
          </a>
          <a
            className="sm-nav-item text-decoration-none m-auto text-white p-4"
            href={Resume}
            download="Alexandra_Grimes_Resume"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
