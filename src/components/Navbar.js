import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Resume from "../assets/Alexandra_Grimes_Resume.pdf"



const Navbar = () => {

    const [showTab, setShowTab] = useState("d-none")
    const [currentPage, setCurrentPage] = useState("home")

    const [bgAM, setBgAM] = useState("bg-white text-navyBlue")
    const [bgWP, setBgWP] = useState("bg-white text-navyBlue")
    const [bgMP, setBgMP] = useState("bg-white text-navyBlue")
    const [bgEx, setBgEx] = useState("bg-white text-navyBlue")
    
    
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
        <nav className="navbar sticky-top p-4 d-flex columnnavbar shadow-2xl">
            <div className="flex flex-row">
                <Link className="text-decoration-none" to='/'><h1 className="nav-home" title="Home Page" alt="logo-map-planner-img">AG</h1></Link>
            </div>
            <div className="lg-screen-nav flex 2xlMax:hidden justify-end">
                <ul className="flex flex-row navbar-nav navbar-right text-white mx-3">
                    <div className="mt-4"><label htmlFor="download resume"><a className="text-decoration-none button py-3 px-3 mx-4" href={Resume} download="Alexandra_Grimes_Resume.pdf" target="_blank">Download Resume</a></label>
                    </div>
                    <label htmlFor="about me"/>
              <button className="nav-item nav-item-area rounded p-4 focus:bg-navyBlue focus:text-white" onClick={() => {
                navigate("/aboutme")}}>
                About Me
              </button>
            <label htmlFor="web projects"/>
              <button className="nav-item nav-item-area rounded p-4 focus:bg-navyBlue focus:text-white" onClick={() => navigate("/webprojects")}>
                Web Projects
              </button>
            <label htmlFor="web projects"/>
              <button className="nav-item nav-item-area rounded p-4 focus:bg-navyBlue focus:text-white" onClick={() => navigate("/mobileprojects")}>
                Mobile Projects
              </button>
            <label htmlFor="experience"/>
              <button 
              className="nav-item nav-item-area rounded p-4 focus:bg-navyBlue focus:text-white"
              onClick={() => navigate("/experience")}
              >
                Experience
              </button>
                </ul>
            </div>
            <div className="sm-screen-nav hidden 2xlMax:flex">
                <a onClick={setDisplayTab}>
                    <i className="fa-solid fa-bars"/>
                </a>
            </div>
        </nav>
            <div className={showTab}>
                <div className="ham-tab hidden 2xlMax:flex NavTop flex-col py-5 text-center">
                    <a className="sm-nav-item text-decoration-none m-auto text-white p-4" onClick={redirectAB}>About Me</a>
                    <a className="sm-nav-item text-decoration-none m-auto text-white p-4" onClick={redirectWP}>Web Projects</a>
                    <a className="sm-nav-item text-decoration-none m-auto text-white p-4" onClick={redirectMP}>Mobile Projects</a>
                    <a className="sm-nav-item text-decoration-none m-auto text-white p-4" onClick={redirectE}>Experience</a>
                    <a className="sm-nav-item text-decoration-none m-auto text-white p-4" href={Resume} download="Alexandra_Grimes_Resume" target='_blank'>Download Resume</a>

                    
                </div>
            </div>

        
    </>
  )
}

export default Navbar;
