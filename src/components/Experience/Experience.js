import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import ExperienceContent from './ExperienceContent'
import styled from 'styled-components'
import Footer from '../Footer.js'
import Resume from '../Resume.js'
import myResume from '../../images/Alex_Grimes_Resume.PNG'

// TODO: 
// // Add download button for resume

const Experience = () => {

    const tabHeaders = ["Experience", "School", "Skills"]
    const [active, setActive] = useState(tabHeaders[0])
    const Button = styled.button`
    /* Same as above */
  `;
  
  const ButtonToggle = styled(Button)`
    opacity: 0.6;

    ${({ active }) =>
      active &&
      `
      opacity: 1;
      border-top: 1px black solid;
      border-left: 1px black solid;
      border-right: 1px black solid;
      border-bottom: 0px;
      color: white;
      background-color: rgb(4, 69, 70);
    `}
  `;
    const ButtonGroup = styled.div`
    display: flex;
    `;

    useEffect (() => {
      window.scroll(0,0)
    })


    return (
        <>
            <div className="work-ex-page">
              <div className="mt-5 row mx-auto px-5">
                <h1 className="my-5">Work Experience</h1>
                <div className="exp-container flex xlMax:flex-col my-5">
                    <div className="tab-box mx-10 h-80 flex flex-col mb-5 xlMax:flex-row xlMax:max-h-32 lgMax:flex-col">
                        {tabHeaders.map((tab, key) => (
                            <ButtonToggle 
                            className="btn-exp xlMax:max-h-[100px] btn px-5 rounded-0 flex-fill btn-toggle"
                            key={key}
                            active={active === tab}
                            onClick={() => setActive(tab)}
                            ><h5>
                            {tab}</h5>
                            </ButtonToggle>
                        ))}
                        
                    </div>
                    <div className="d-flex col exp-box">
                        <ExperienceContent active={active}/>
                    </div>
                    
                </div>

                {/* Resume */}
                <h4 className="resume-note hidden lgMax:flex justify-content-center">Scroll to see full resume:</h4>
                <div className="m-auto lgMax:overflow-auto lgMax:justify-start w-100 d-flex justify-content-center">
                  <img class="resume-img lgMax:w-[700px] mt-5 border" src={myResume} />
                </div>
              </div>
              <div className="m-5 resume-div d-flex row align-items-center justify-content-center">
                {/* <Resume /> */}
              </div>

              <Footer/>
              {/* <footer className="footer footer-exp p-5 text-center">
                  <a className="py-5" href="https://github.com/agrimes23"><i className="footer-text fa-brands fa-github text-white px-5" title="Github"></i></a>
                  <a className="py-5" href="https://www.linkedin.com/in/alex-grimes-dev/"><i className="footer-text fa-brands fa-linkedin text-white px-5" title="LinkedIn"></i></a>
                  <a className="py-5" href="mailto: alexgrimes23@gmail.com"><i className="footer-text fa-regular fa-envelope text-white px-5" title="Email"></i></a>
            </footer> */}
            </div>

        </>
    )

}

export default Experience;