import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import Footer from './Footer.js'
import forestPath from '../assets/dimForest.jpg'

const AboutMe = () => {

    useEffect (() => {
        window.scroll(0,0)
    })

    return (
        <>
            <div className="flex flex-col min-h-screen min-w-screen">
                <div className="flex-grow flex items-center max-w-full bg-cover px-32 py-28 lgMax:px-10 smMax:px-5" style={{ backgroundImage: `url(${forestPath})`}}>
                    <div className="flex-grow w-3/4 mx-auto max-w-4xl px-20 pb-24 pt-10 d-flex row fadeInTop rounded bg-lemonChiffon bg-opacity-90 lgMax:px-10 smMax:px-5">
                        <div className="my-5">
                            <h1 className="text-5xl smMax:text-4xl font-bold">About Me</h1>
                        </div>
                        <div>
                        <h5 className="text-xl smMax:text-base">Alex Grimes is a dynamic Software Engineer and Full Stack Developer based in Chicago, Illinois, with a passion for crafting innovative digital solutions. With a diverse skill set encompassing languages like JavaScript, Python, HTML, CSS, and Java, as well as a deep understanding of frameworks such as React, React Native, and Express, Alex is a versatile professional capable of tackling complex challenges across the software development spectrum.</h5>
                            <br/>
                            <h5 className="text-xl smMax:text-base">Alex's journey in software engineering began with a solid foundation from a 12-week, 400-hour Software Engineering program at General Assembly, where they honed their expertise in Git, database management, and a range of programming languages. This dedication to learning has culminated in a strong portfolio that showcases their proficiency in developing practical applications.</h5>
                            <br/>
                            <h5 className="text-xl smMax:text-base">In a recent role as a Sprint Participant Software Engineer at The Opportunity Project, Alex demonstrated exceptional teamwork as they collaborated with a cross-functional team of 15 professionals, including software engineers, UX/UI designers, and data scientists. Alex's leadership abilities shone through as they took on the role of Scrum Master, ensuring efficient task prioritization and fostering effective communication within the team.</h5>
                            <br/>
                            <h5 className="text-xl smMax:text-base">Throughout their career, Alex has consistently demonstrated adaptability and problem-solving prowess. Their diverse experiences, from streamlining processes as an Accounting Specialist at UACJ North America, Inc., to crafting engaging learning activities as an Assistant Language Teacher in the JET Program, have equipped them with a unique perspective and the ability to approach challenges with creativity and resourcefulness. </h5>
                            <br/>
                            <h5 className="text-xl smMax:text-base">Alex's commitment to excellence is further exemplified in their project work. Notably, they spearheaded the development of a Community Test Lab App at The Opportunity Project, ensuring secure and anonymous reporting of at-home COVID test results. Their technical acumen shines through in the use of technologies like React Native, Typescript, and Sequelize to create a robust and user-friendly solution. Additionally, their recent participation in the Financial Literacy Hackathon resulted in the creation of a Credit Score App, showcasing their ability to deliver under tight deadlines while maintaining data security through Supabase authentication.</h5>
                            <br/>
                            <h5 className="text-xl smMax:text-base">With a passion for problem-solving, a knack for leadership, and a track record of delivering innovative software solutions, Alex Grimes is a Software Engineer who continually seeks to push the boundaries of what's possible in the world of technology. Their commitment to excellence and diverse skill set make them a valuable asset to any software development team.</h5>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer bg-darkBlueGreen relative p-5 text-center">
                    <a className="py-5" href="https://github.com/agrimes23"><i className="footer-text fa-brands fa-github text-white px-5" title="Github"></i></a>
                    <a className="py-5" href="https://www.linkedin.com/in/alex-grimes-dev/"><i className="footer-text fa-brands fa-linkedin text-white px-5" title="LinkedIn"></i></a>
                    <a className="py-5" href="mailto: alexgrimes23@gmail.com"><i className="footer-text fa-regular fa-envelope text-white px-5" title="Email"></i></a>
            </footer>
        </>
    )

}

export default AboutMe;