import React from 'react'
import GeneralNav from './index'
import gear from "../assets/modules-settings.png"
import connectEmployee from '../assets/aems2.png'
import employeeCollaboration from '../assets/aems-colaboration.jpg'
import employeeSatisfactiion from '../assets/aems-thumbs-up.jpg'
import colors from './utils/Colors'
import BackgroundSlider from 'react-background-slider'

function Home() {
    return (
        <GeneralNav>
            <div className="home-body">
                <BackgroundSlider
                        images={[employeeCollaboration]}
                    duration={30} transition={2} >
                
                
                </ BackgroundSlider>
                <div className="main-heading">
                    <div className="left-head">
                        <h1>Manage your employees from one place</h1>
                        <p className="head-body">
                            Communicate, operate and monitor your employees with AEMS. Easy to use, scalable like no other... Get started today.
                        </p>
                        <button className="get-started">Get Started</button>

                    </div>
                    <div className="right-container">
                        <div className="right-curve"></div>

                    </div>
                </div>
                

                <div className="solutions">
                    <h1>Multiple Solutions in one place</h1>
                    <div className="cards-container">

                        <div className="cards">
                            <span className="icon">
                                <img src={gear} alt="settings" className="gear"/>
                            </span>
                            <p className="head">Employee <br/> Collaboration</p>

                            <div className="card-extend">
                                {/* <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> */}
                                <button className="learn-more">Learn More</button>
                            </div>
                        </div>
                        <div className="cards">
                            <span className="icon">
                            <img src={gear} alt="settings" className="gear"/>

                            </span>
                            <p className="head">HR <br/>Functionality</p>
                            <div className="card-extend">
                                {/* <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> */}
                                <button className="learn-more">Learn More</button>
                            </div>
                        </div>
                        <div className="cards">
                            <span className="icon">
                                <img src={gear} alt="settings" className="gear"/>

                            </span>
                            <p className="head">Salary <br/> and Payments </p>
                            <div className="card-extend">
                                {/* <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> */}
                                <button className="learn-more">Learn More</button>
                            </div>
                        </div>
                        <div className="cards">
                            <span className="icon">
                            <img src={gear} alt="settings" className="gear"/>

                            </span>
                            <p className="head">Some <br/>Functionality</p>
                            <div className="card-extend">
                                {/* <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> */}
                                <button className="learn-more">Learn More</button>
                            </div>
                        </div>
                        <div className="cards">
                            <span className="icon">
                                <img src={gear} alt="settings" className="gear"/>

                            </span>
                            <p className="head">Some <br/>Functionality</p>
                            <div className="card-extend">
                                {/* <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> */}
                                <button className="learn-more">Learn More</button>
                            </div>
                        </div>
                        <div className="cards">
                            <span className="icon">
                                <img src={gear} alt="settings" className="gear"/>

                            </span>
                            <p className="head">Some <br/>Functionality</p>
                            <div className="card-extend">
                                {/* <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> */}
                                <button className="learn-more">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="module-get-started">
                    <div className="home-block">
                        <div className="img">
                            <img src={connectEmployee} alt="employee_management"/>
                        </div>
                        <div className="description">
                            <h1>Enhance And Speed up Employee Management</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur dolor minima vero voluptatibus, odio dolorum amet deserunt nihil exercitationem earum nam voluptatum cumque sed voluptates necessitatibus. Nisi, laborum! Natus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia non perferendis temporibus sequi sunt eum ipsam officiis vero similique?
                            </p>
                            <button className="get-started" style={{backgroundColor:colors.main_2}}>Get Started</button>
                        </div>

                    </div>
                    <div className="home-block revers-flex">
                        <div className="img">
                            <img src={employeeCollaboration} alt="employee_collaboration"/>
                        </div>
                        <div className="description">
                            <h1>Facilitate Employee Collaboration </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur dolor minima vero voluptatibus, odio dolorum amet deserunt nihil exercitationem earum nam voluptatum cumque sed voluptates necessitatibus. Nisi, laborum! Natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat est esse quae sequi iste deleniti sit eos. Non, commodi!
                            </p>
                            <button className="get-started">Get Started</button>
                        </div>
                    </div>
                    <div className="home-block">
                        <div className="img">
                            <img src={employeeSatisfactiion} alt="employee_satisfaction"/>
                        </div>
                        <div className="description">
                            <h1>All round Satifaction with AEMS</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur dolor minima vero voluptatibus, odio dolorum amet deserunt nihil exercitationem earum nam voluptatum cumque sed voluptates necessitatibus. Nisi, laborum! Natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt saepe itaque nesciunt voluptates soluta ipsa, omnis magni velit quae illo!
                            </p>
                            <button className="get-started" style={{ backgroundColor: colors.main_3 }}>Get Started</button>
                        </div>
                    </div>
                </div>


            </div>
        </GeneralNav>

    )
}

export default Home
