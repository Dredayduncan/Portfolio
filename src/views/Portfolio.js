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
                <LittleLabel text="MY WORKS"/>
                <h1>Some of my projects</h1>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner rounded">
                    <div className="carousel-item active" style={{"background": "#1b542f"}}>
                        <WebAppView 
                            image={spearCapital} 
                            name="Spear Capital & Advisory" 
                            description=" I am a highly versatile and adaptive individual who can work across divergent
                                environments and with various technologies, constantly learning and improving 
                                on skill set. Having worked on mobile, web and back-end development, I have 
                                a lot of experience with technologies such as Flutter, Python, Java, HTML, CSS,
                                JavaScript, PHP, Figma, and Git." 
                            color= "#ffffff"
                        />
                    </div>
                    <div className="carousel-item" style={{"background": "#8f2e2e"}}>
                        <MobileAppView 
                            image={mySafeCampus} 
                            name="My Safe Campus" 
                            description=" I am a highly versatile and adaptive individual who can work across divergent
                                environments and with various technologies, constantly learning and improving 
                                on skill set. Having worked on mobile, web and back-end development, I have 
                                a lot of experience with technologies such as Flutter, Python, Java, HTML, CSS,
                                JavaScript, PHP, Figma, and Git." 
                        />
                    </div>
                    <div className="carousel-item" style={{"background": "#969796"}}>
                        <WebAppView 
                            image={asvie} 
                            name="Asvie" 
                            description=" I am a highly versatile and adaptive individual who can work across divergent
                                environments and with various technologies, constantly learning and improving 
                                on skill set. Having worked on mobile, web and back-end development, I have 
                                a lot of experience with technologies such as Flutter, Python, Java, HTML, CSS,
                                JavaScript, PHP, Figma, and Git." 
                        />
        
                    </div>
                    
                    <div className="carousel-item" style={{"background": "#ac3e46"}}>
                        <MobileAppView 
                            image={ashesiCom} 
                            name="AshesiCom" 
                            description=" I am a highly versatile and adaptive individual who can work across divergent
                                environments and with various technologies, constantly learning and improving 
                                on skill set. Having worked on mobile, web and back-end development, I have 
                                a lot of experience with technologies such as Flutter, Python, Java, HTML, CSS,
                                JavaScript, PHP, Figma, and Git." 
                        />
                    </div>
                </div>
            </div>

        </div>
               
        
          
        <div className="d-flex justify-content-center pt-5 pb-5">
            <HireButton width="300px" text="Check out my GitHub for more projects" />
        </div>

    </section>
}

export default Portfolio;