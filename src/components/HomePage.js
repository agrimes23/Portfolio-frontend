import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'

const HomePage = () => {

    return (
        <>
            <div className="style-border">
                <div className="intro-styling"></div>
                <div id="intro_section" className="main-intro text-center">
                    <h1 className="main-title">Alex Grimes</h1>
                    <h2 className="description-title">Frontend Developer | Web Developer</h2>
                </div>
            </div>
        </>
    )

}

export default HomePage;