import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation, useNavigate } from 'react-router-dom'

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

    const redirectP = () => {
        setShowTab("d-none")
        navigate("/projects")
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
            <div className="lg-screen-nav justify-content-end">
                <ul className="d-flex flex-row navbar-nav navbar-right text-white mx-3">
                    <label htmlFor="about me" className="nav-item-area"><Link className="text-decoration-none nav-item p-4" to='/aboutme'>About Me</Link></label>
                    <label htmlFor="projects" className="nav-item-area"><Link className="text-decoration-none nav-item p-4" to='/projects'>Projects</Link></label>
                    <label htmlFor="experience" className="nav-item-area"><Link className="text-decoration-none nav-item p-4" to='/experience'>Experience</Link></label>
                </ul>
            </div>
            <div className="sm-screen-nav">
                <a onClick={setDisplayTab}>
                    <i className="fa-solid fa-bars"/>
                </a>
            </div>
        </nav>
            <div className={showTab}>
                <div className="ham-tab NavTop row py-5 text-center">
                    <a className="sm-nav-item text-decoration-none m-auto text-white p-4" onClick={redirectAB}>About Me</a>
                    <a className="sm-nav-item text-decoration-none m-auto text-white p-4" onClick={redirectP}>Projects</a>
                    <a className="sm-nav-item text-decoration-none m-auto text-white p-4" onClick={redirectE}>Experience</a>
                </div>
            </div>

        
    </>
  )
}

export default Navbar;
