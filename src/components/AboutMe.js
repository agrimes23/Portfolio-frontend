import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'

const AboutMe = () => {

    return (
        <>
            <div id="aboutme_section" className="aboutme-page d-flex align-items-center row m-auto w-50">
                    <div className="aboutme-section rounded">
                        <div>
                            <h2 className="mb-4">About Me</h2>
                        </div>
                        <div>
                            <h5 className="mt-4">Organized, results-driven Full-Stack Developer. My time working in Japan has taught me the value of teamwork and cooperation to get a project done. As well as being a dependable member of a team, I am very focused and organized which motivates me to take on ambitious projects. 
                            </h5>
                        </div>
                    </div>
                </div>
        </>
    )

}

export default AboutMe;