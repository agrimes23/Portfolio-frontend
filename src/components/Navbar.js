import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation, useNavigate } from 'react-router-dom'
import Resume from "../assets/Alexandra_Grimes_Resume.pdf"

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

    useEffect (() => { 

    })


  return (
    <>
        <nav className="navbar sticky-top p-4 d-flex columnnavbar">
            <div className="d-flex flex-row">
                <Link className="text-decoration-none" to='/'><h1 className="nav-home" title="Home Page" alt="logo-map-planner-img">AG</h1></Link>
            </div>
            <div className="lg-screen-nav flex 2xlMax:hidden justify-content-end">
                <ul className="d-flex flex-row navbar-nav navbar-right text-white mx-3">
                    <div className="mt-2"><label htmlFor="download resume"><a className="text-decoration-none button py-3 px-3 mx-4" href={Resume} download="Alexandra_Grimes_Resume.pdf" target="_blank">Download Resume</a></label>
                    </div>
                    <label htmlFor="about me" className="nav-item-area pt-2"><Link className="text-decoration-none nav-item p-4" to='/aboutme'>About Me</Link></label>
                    <label htmlFor="web projects" className="nav-item-area pt-2"><Link className="text-decoration-none nav-item p-4" to='/webprojects'>Web Projects</Link></label>
                    <label htmlFor="web projects" className="nav-item-area pt-2"><Link className="text-decoration-none nav-item p-4" to='/mobileprojects'>Mobile Projects</Link></label>
                    <label htmlFor="experience" className="nav-item-area pt-2"><Link className="text-decoration-none nav-item p-4" to='/experience'>Experience</Link></label>
                </ul>
            </div>
            <div className="sm-screen-nav hidden 2xlMax:flex">
                <a onClick={setDisplayTab}>
                    <i className="fa-solid fa-bars"/>
                </a>
            </div>
        </nav>
            <div className={showTab}>
                <div className="ham-tab hidden 2xlMax:flex NavTop row py-5 text-center">
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
