import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'

const AboutMe = () => {

    useEffect (() => {
        window.scroll(0,0)
    })

    return (
        <>
            <div className="aboutme-page d-flex align-items-center row m-auto w-75">
                    <div className="aboutme-section d-flex row fadeInTop rounded">
                        <div>
                            <h1 className="">About Me</h1>
                        </div>
                        <div>
                            <h5 className="">Full-Stack Developer trained in a 400+ hour Software Engineering course through General Assembly. I am very familiar with React, Node.js, Python (Django), including many more frameworks and languages. </h5>
                            <br/>
                            <h5>My previous job as an accountant was more than accounting work. One of my projects was setting up an online expense system and training employees, as well as creating a MS Work Automate program that would send employee's submitted pre-trip business applications to their specific approvers. I took the time to review all the questions on the paper-based form and narrowed it down to 10 questions on MS Forms. The outcome was very successful; it reduced the amount of time employees spent on sending pre-trip business applications, quicker time submitting to their approvers, and of course all online.</h5>
                            <br/>
                            <h5>Ever since I took on the challenge to learn how to write programs through MS Automate, I have been excited to see what more I can do to help reduce time spent on tasks that need to be done. </h5>
                            <br/>
                            <h5>I'm a thorough thinker, organized, and very ambitious when it comes to coding projects. </h5>
                        </div>
                    </div>
                </div>
        </>
    )

}

export default AboutMe;