import React from 'react';
import HomeCards from "../components/HomeCards";
import experienceBadge from "../assets/images/ExperienceBadge.png";
import completedProjectsBadge from "../assets/images/CompletedProjectsBadge.png";
import happyClient from "../assets/images/happyClient.png";
import avatar from "../assets/images/andrewmemoji.png";
import HireButton from "../components/HireButton";
import logo from "../assets/images/dredayLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faAddressCard, faBriefcase, faEnvelope, faToolbox} from '@fortawesome/free-solid-svg-icons';

/**
 * It returns a section element with a class name of homeSection
 * @returns A section with a title, a paragraph, an image, and a div with three HomeCards.
 */
function Home(){
    return  <section id='homeSection' className='homeSection' data-scroll-section>

        {/* mobile menu */}
        <div className='d-block d-md-none pb-4'>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="mobileNav container-fluid position-fixed pt-3 ps-0 bg-dark">
                        <img src={logo} alt="" height="50"/>
                        <button className="navbar-toggler shadow-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <HireButton text="Hire Me" width="100px" />
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="active" id='mobileHomeLink'>
                                        <span><FontAwesomeIcon icon={faHome} /> </span>
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a id='mobileAboutLink'>
                                        <span><FontAwesomeIcon icon={faAddressCard} /> </span>
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a id='mobileSkillsLink'>
                                        <span><FontAwesomeIcon icon={faToolbox} /> </span>
                                        Skills
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a id='mobilePortfolioLink'>
                                        <span><FontAwesomeIcon icon={faBriefcase} /> </span>
                                        Portfolio
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a id='mobileFooterLink'>
                                        <span><FontAwesomeIcon icon={faEnvelope} /> </span>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>

        {/* main menu */}
        <div id="home" className="d-flex justify-content-around align-items-center navSection d-none d-md-flex " data-scroll-section>
            <div>
                <img src={logo} alt="" height="80"/>
            </div>
            <div className="navBar">
                <a className="active" id='homeLink'>Home</a>
                <a id='aboutLink'>About</a>
                <a id='skillsLink'>Skills</a>
                <a id='portfolioLink'>Portfolio</a>
                <a id='footerLink'>Contact</a>
            </div>
            <HireButton text="Hire Me" width="100px" />
        </div>

        {/* home body  */}

        <div className='home-body'>
            <h5 data-scroll data-scroll-speed="1" data-scroll-class="appear" data-scroll-repeat="true">
                Hey There, I Am 
                <span className="orangeText">
                    <u> Andrew Duncan</u>
                </span> 
                <span role="img" aria-label="waving">
                    👋🏽
                </span>
            </h5>

            <h1 className='pt-2'>Software Engineer & Mobile Application Developer</h1>
             
            <p className='pt-3'>I love making the world easier and simpler one piece of code at a time.</p>

            <img src={avatar} className="avatar" alt=""/>
            
            <div className="homeCards row justify-content-evenly" data-scroll data-scroll-direction="horizontal" data-scroll-speed="1" data-scroll-repeat="true">
                <HomeCards icon={experienceBadge} value="2" label="Years Of Experience"/>
                <HomeCards icon={completedProjectsBadge} value="8" label="Completed Projects"/>
                <HomeCards icon={happyClient} value="7" label="Satisfied Clients"/>
            </div>

        </div>
            
            
            
    </section>;
}

export default Home;