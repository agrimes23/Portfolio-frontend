import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="navbar sticky-top p-4 d-flex columnnavbar">
            <div className="d-flex flex-row">
                <Link className="text-decoration-none" to='/'><h1 className="nav-home" alt="logo-map-planner-img">AG</h1></Link>
            </div>
            <div className=" justify-content-end">
                <ul className="d-flex flex-row navbar-nav navbar-right text-white mx-3">
                    <label htmlFor="about me" className="nav-item-area"><Link className="text-decoration-none nav-item p-4" to='/aboutme'>About Me</Link></label>
                    <label htmlFor="projects" className="nav-item-area"><Link className="text-decoration-none nav-item p-4" to='/projects'>Projects</Link></label>
                    <label htmlFor="experience" className="nav-item-area"><Link className="text-decoration-none nav-item p-4" to='/experience'>Experience</Link></label>

                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;
