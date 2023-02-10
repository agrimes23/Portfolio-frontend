import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const ExperienceContent = (props) => {

    const tabHeaders = ["Oct 2022 - Jan 2023", "Oct 2019 – Jun 2022", "Jul 2017 – Jul 2019"]
    const [clicked, setClicked] = useState(tabHeaders[0])
    const Button = styled.button`
    /* Same as above */
  `;

    const ButtonToggle = styled(Button)`
    opacity: 0.6;
    color:  rgb(4, 69, 70);
    ${({ active }) =>
      active &&
      `
      opacity: 1;
      border-bottom: 3px rgb(4, 69, 70) solid;

    `}
  `;
    const ButtonGroup = styled.div`
    display: flex;
    `;

    return (
        <>
                        <div className="py-2 col exp-content">
                          <div className={ props.active === "Experience" ? "show-tab row fadeInTop" : "hide-tab"}>
                            <div className="d-flex row pb-5">
                              <div className="tab-row d-flex col">
                                  {tabHeaders.map((tab, key) => (
                                      <ButtonToggle 
                                      className="btn rounded-0 flex-fill"
                                      key={key}
                                      active={clicked === tab}
                                      onClick={() => setClicked(tab)}
                                      ><h5><strong>
                                      {/* will need to make onClick an actual function with an if statement */}
                                      {tab}</strong></h5>
                                      </ButtonToggle>
                                  ))}
                              </div>
                              
                              </div>
                              <div className={ clicked === "Oct 2022 - Jan 2023" ? "show-tab row fadeInTop" : "hide-tab"}>
                                  <div className="p-3">
                                      <h4>Software Engineer Fellow</h4>
                                      <h5><em>General Assembly</em></h5>
                                      <h6><em>Remote</em></h6>
                                      <ul>
                                          <li>Attended a 12-week, 400+ hour training program focused on Git/GitHub, HTML, CSS, JavaScript, Node, MongoDB, SQL, Python, Java, jQuery, etc.</li>
                                          <li>Included learning best practices for using Third-Party APIs, as well as incorporating REST APIs and MVC frameworks.</li>
                                      </ul>
                                  </div>
                              </div>
                            
                          <div className={ clicked === "Oct 2019 – Jun 2022" ? "show-tab row fadeInTop" : "hide-tab"}>                              
                              <div className="p-3">
                                <h4>Accounting Specialist</h4>
                                <h5><em>UACJ North America, Inc.</em></h5>
                                <h6><em>Hybrid-Remote, Chicago, IL</em></h6>
                                <ul>
                                  <li>Communicated with Japanese banks to set up new loans and disburse funds to group companies across North America. Daily accounting tasks such as entering bills, invoices, and initiating payments.</li>
                                  <li>Created a business trip request system through MS Work Automate, where the form submitted by employees would be submitted for approval to their specific approver.</li>
                                  <li>Set up an online paperless expense reporting software for employees and trained them on how to use it.</li>
                                </ul>
                              </div>
                          </div>
                          
                          <div className={ clicked === "Jul 2017 – Jul 2019" ? "show-tab row fadeInTop" : "hide-tab"}>
                                
                              <div className="p-3">
                                <h4>Japan Exchange & Teaching Program (JET) Assistant Language Teacher</h4>
                                <h5><em>Fukui Prefectural Board of Education, Japan</em></h5>
                                <ul>
                                  <li>Improved English proficiency of junior high school students by providing instruction as a native speaker and developed activities for language lessons.</li>
                                  <li>Overcame language and cultural barriers to quickly become an effective and productive member of the teaching staff.</li>
                                  <li>Exhibited flexibility and adaptability when coordinating plans with other English teachers.</li>
                                </ul>
                              </div>
                          </div>

                      </div>


                        <div className={ props.active === "School" ? "show-tab row fadeInTop" : "hide-tab"}>
                          <div className="py-5">
                            <div className="p-3">
                              <h5>General Assembly</h5>
                              <h6><em>Software Engineering Immersive</em></h6>
                              <h6>Oct 2022 - Jan 2023</h6>
                            </div>
                            <hr/>
                            <div className="p-3">
                              <h5>Purdue University - West Lafayette</h5>
                              <h6><em>Bachelor of Arts: Linguistics & Spanish</em></h6>
                              <h6>Aug 2011 - May 2015</h6>
                            </div>
                          </div>
                        </div>

                        <div className={ props.active === "Skills" ? "show-tab row fadeInTop" : "hide-tab"}>
                          <div className="d-flex row text-center pt-4">
                            <div className="p-3 m-3">
                              <img className="img-style p-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" />
                              <img className="img-style p-3" src="https://www.djangoproject.com/m/img/logos/django-logo-negative.png" />
                              <img className="img-style p-3" src="https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b" />
                            </div>
                            <div className="p-3 m-3">
                                <img className="img-style p-3" src="https://cdn-icons-png.flaticon.com/512/888/888859.png"/>
                                <img className="img-style p-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"/>
                                <img className="img-style p-3" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png"/>
                            </div>
                       
                            <div className="p-3 m-3">
                                <img className="img-style p-3" src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png"/>
                            </div>
                            
                            <div className="p-3 m-3">
                                <img />
                            </div>
                          </div>
                      </div>
                      </div>
        </>
    )

}

export default ExperienceContent;