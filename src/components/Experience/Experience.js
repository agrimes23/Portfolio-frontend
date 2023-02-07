import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import ExperienceContent from './ExperienceContent'
import styled from 'styled-components'


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
                <div className="exp-container d-flex col">
                    <div className="tab-box d-flex">
                        {tabHeaders.map((tab, key) => (
                            <ButtonToggle 
                            className="btn-exp btn px-5 rounded-0 flex-fill btn-toggle"
                            key={key}
                            active={active === tab}
                            onClick={() => setActive(tab)}
                            ><h5>
                            {/* will need to make onClick an actual function with an if statement */}
                            {tab}</h5>
                            </ButtonToggle>
                        ))}
                        
                    </div>
                    <div className="d-flex col exp-box">
                        <ExperienceContent active={active}/>
                    </div>
                </div>
              </div>

            </div>
        </>
    )

}

export default Experience;