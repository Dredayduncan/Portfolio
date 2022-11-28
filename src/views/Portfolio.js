import React from 'react';
import LittleLabel from "../components/LittleLabel";
import asvie from "../assets/images/asvie.png";
import spearCapital from "../assets/images/sca.png";
import ashesiCom from "../assets/images/AshesiCom.png";
import HireButton from "../components/HireButton";
import mySafeCampus from "../assets/images/mySafeCampus.png";
import MobileAppView from '../components/mobileAppView';
import WebAppView from '../components/webAppView';

function Portfolio(){
    
    return <section id="portfolio" data-scroll-section>

        <div className='container pt-3'>

            <div className='portfolio-header'>
                <LittleLabel text="MY WORKS" data-scroll data-scroll-speed="2" data-scroll-class="appear" data-scroll-repeat="true"/>
                <h1 data-scroll data-scroll-speed="1" data-scroll-class="appear" data-scroll-repeat="true" className='pt-4'>Some of my projects</h1>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-scroll data-scroll-speed="1" data-scroll-class="appear" data-scroll-repeat="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner rounded">
                    <div className="carousel-item active" style={{"background": "#1b542f"}} data-bs-interval="2000">
                        <WebAppView 
                            image={spearCapital} 
                            name="Spear Capital & Advisory" 
                            description=" A website for Spear Capital Advisory Limited; a Ghanaian company that aids other enterprises to upscale their businesses. " 
                            color= "#ffffff"
                            link="https://www.spearcapitaladvisory.com"

                        />
                    </div>
                    <div className="carousel-item" style={{"background": "#8f2e2e"}} data-bs-interval="2000">
                        <MobileAppView 
                            image={mySafeCampus} 
                            name="My Safe Campus" 
                            description=" My Safe Campus is a system that aims to allow members of a local university to report cases of sexual misconduct easily 
                            and train them on the university's sexual misconduct policies. The training system and the incident reporting system are two of its components. 
                            The reporting system which is the mobile application enables users to report and raise alarms of incidences of sexual misconduct, 
                            while the training system, the web application, instructs and tests the users on appropriate sexual misbehavior through lessons and quizzes.
                            " 
                        />
                    </div>
                    <div className="carousel-item" style={{"background": "#969796"}} data-bs-interval="2000">
                        <WebAppView 
                            image={asvie} 
                            name="Asvie" 
                            description=" Asvie, a virtual integrated voice assistant, is based on Edward Jarvis' famous Artificial Intelligence Assistant, Jarvis, from the Marvel universe. 
                            The main goal of this project is to create a Jarvis that is compatible with Ashesi students. It is a tool for keeping students up to date on events, academic assignments, 
                            and aid with research. With verbal cues in the form of requests, students are able to retrieve their grades, upcoming assignments, lectures with the times and locations they occur at, 
                            read their emails and make internet searches." 
                        />
        
                    </div>
                    
                    <div className="carousel-item" style={{"background": "#ac3e46"}} data-bs-interval="2000">
                        <MobileAppView 
                            image={ashesiCom} 
                            name="AshesiCom" 
                            description=" A twitter clone for the community of a local university. It allows people belonging to this community to share their thoughts, 
                            current status and updates with the rest of the community through posts. Users of this application can react through likes, 
                            comments and reposts with these posts to create a sense of community through the interaction." 
                            link="https://github.com/Dredayduncan/AshesiComAppWithFlutter"
                        />
                    </div>
                </div>
            </div>

        </div>
               
        
          
        <div className="d-flex justify-content-center pt-5">
            <HireButton width="300px" text="Check out my GitHub for more projects" />
        </div>

    </section>
}

export default Portfolio;