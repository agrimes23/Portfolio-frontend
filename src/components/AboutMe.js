import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import forestPath from '../assets/dimForest.jpg'
import blueGoldWC from '../assets/blue_gold_watercolor.jpg'

const AboutMe = () => {

    useEffect (() => {
        window.scroll(0,0)
    })

    return (
        <>
            <Navbar />
            <div className="flex flex-col min-h-screen min-w-screen">
                <div className="flex-grow flex items-center max-w-full bg-cover px-32 py-28 lgMax:px-10 smMax:px-5" style={{ backgroundImage: `url(${blueGoldWC})`}}>
                    <div className="flex-grow w-3/4 mx-auto max-w-4xl px-20 pb-24 pt-10 d-flex row fadeInTop rounded bg-lemonChiffon border-navyBlue border-4 bg-opacity-90 lgMax:px-10 smMax:px-5">
                        <div className="my-5">
                            <h1 className="text-5xl text-black smMax:text-4xl font-bold">About Me</h1>
                        </div>
                        <div>
                            <h5 className="text-xl text-black smMax:text-base">A dynamic Software Engineer and Full Stack Developer based in Chicago, Illinois. I have a diverse skill set encompassing languages like JavaScript, Python, HTML, CSS, and Java, as well as a deep understanding of frameworks such as React, React Native, and Express.</h5>
                            <br/>
                            <h5 className="text-xl text-black smMax:text-base">As a Sprint Participant Software Engineer at The Opportunity Project, I collaborated with a cross-functional team of 15 professionals, including software engineers, UX/UI designers, and data scientists. I took on the role of Scrum Master for my development team, ensuring efficient task prioritization and fostering effective communication within the team. </h5>
                            <br/>
                            <h5 className="text-xl text-black smMax:text-base">My recent participation in the Financial Literacy Hackathon resulted in the creation of a Credit Score App, showing my ability to deliver under tight deadlines while maintaining data security through Supabase authentication.</h5>
                            <br/>
                            <h5 className="text-xl text-black smMax:text-base">Throughout my career, I have consistently demonstrated adaptability and problem-solving prowess. My diverse experiences, from creating a new online-based travel approval applications for employees as an Accounting Specialist at UACJ North America, to crafting engaging learning activities as an Assistant Language Teacher through the JET Program in Japan, these experiences have equipped me with a unique perspective and the ability to approach challenges with creativity and resourcefulness. </h5>
                            <br/>
                            <h5 className="text-xl text-black smMax:text-base">With a passion for problem-solving and a track record of delivering innovative software solutions, I continually seek to push the boundaries of what's possible in the world of technology. My commitment to excellence and diverse skill set make them a valuable asset to any software development team.</h5>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer bg-[#0e2038] relative p-5 text-center">
                    <a className="py-5" href="https://github.com/agrimes23"><i className="footer-text fa-brands fa-github text-white px-5" title="Github"></i></a>
                    <a className="py-5" href="https://www.linkedin.com/in/alex-grimes-dev/"><i className="footer-text fa-brands fa-linkedin text-white px-5" title="LinkedIn"></i></a>
                    <a className="py-5" href="mailto: alexgrimes23@gmail.com"><i className="footer-text fa-regular fa-envelope text-white px-5" title="Email"></i></a>
            </footer>
        </>
    )

}

export default AboutMe;