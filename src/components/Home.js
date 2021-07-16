import React from 'react'
import GeneralNav from './index'
import gear from "../assets/modules-settings.png"
function Home() {
    return (
        <GeneralNav>
            <div className="home-body">
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
                            <p className="head">Some <br/> Functionality</p>

                            <div className="card-extend">
                                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <button className="learn-more">Learn More</button>
                            </div>
                        </div>
                        <div className="cards">
                            <span className="icon">
                            <img src={gear} alt="settings" className="gear"/>

                            </span>
                            <p className="head">Some <br/>Functionality</p>
                            <div className="card-extend">
                                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <button className="learn-more">Learn More</button>
                            </div>
                        </div>
                        <div className="cards">
                            <span className="icon">
                                <img src={gear} alt="settings" className="gear"/>

                            </span>
                            <p className="head">Some <br/>Functionality</p>
                            <div className="card-extend">
                                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <button className="learn-more">Learn More</button>
                            </div>
                        </div>
                        <div className="cards">
                            <span className="icon">
                            <img src={gear} alt="settings" className="gear"/>

                            </span>
                            <p className="head">Some <br/>Functionality</p>
                            <div className="card-extend">
                                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <button className="learn-more">Learn More</button>
                            </div>
                        </div>
                        <div className="cards">
                            <span className="icon">
                                <img src={gear} alt="settings" className="gear"/>

                            </span>
                            <p className="head">Some <br/>Functionality</p>
                            <div className="card-extend">
                                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <button className="learn-more">Learn More</button>
                            </div>
                        </div>
                        <div className="cards">
                            <span className="icon">
                                <img src={gear} alt="settings" className="gear"/>

                            </span>
                            <p className="head">Some <br/>Functionality</p>
                            <div className="card-extend">
                                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <button className="learn-more">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="module-get-started">
                    <div className="block">
                        <div className="img"></div>
                        <div className="description">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur dolor minima vero voluptatibus, odio dolorum amet deserunt nihil exercitationem earum nam voluptatum cumque sed voluptates necessitatibus. Nisi, laborum! Natus.
                            </p>
                            <button className="get-started">Get Started</button>
                        </div>

                    </div>
                    <div className="block">
                        <div className="img"></div>
                        <div className="description">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur dolor minima vero voluptatibus, odio dolorum amet deserunt nihil exercitationem earum nam voluptatum cumque sed voluptates necessitatibus. Nisi, laborum! Natus.
                            </p>
                            <button className="get-started">Get Started</button>
                        </div>
                    </div>
                    <div className="block">
                        <div className="img"></div>
                        <div className="description">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur dolor minima vero voluptatibus, odio dolorum amet deserunt nihil exercitationem earum nam voluptatum cumque sed voluptates necessitatibus. Nisi, laborum! Natus.
                            </p>
                            <button className="get-started">Get Started</button>
                        </div>
                    </div>
                </div>


            </div>
        </GeneralNav>

    )
}

export default Home
