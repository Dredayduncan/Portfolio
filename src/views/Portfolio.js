import React from 'react';
import LittleLabel from "../components/LittleLabel";
import asvie from "../assets/images/asvie.png";
import spearCapital from "../assets/images/sca.png";
import ashesiCom from "../assets/images/AshesiCom.png";
import HireButton from "../components/HireButton";
import mySafeCampus from "../assets/images/mySafeCampus.png";
import MobileAppView from '../components/mobileAppView';
import WebAppView from '../components/webAppView';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/navigation/navigation.min.css';


function Portfolio(){
    
    return <section id="portfolio" data-scroll-section>

        <div className='container pt-3'>

            <div className='portfolio-header'>
                <LittleLabel text="MY WORKS" data-scroll data-scroll-speed="2" data-scroll-class="appear" data-scroll-repeat="true"/>
                <h1 data-scroll data-scroll-speed="1" data-scroll-class="appear" data-scroll-repeat="true" className='pt-4'>Some of my projects</h1>
            </div>

        </div>

        <div className='container' data-scroll data-scroll-speed="1" data-scroll-class="appear" data-scroll-repeat="true">
            <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            // spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <WebAppView 
                        image={asvie} 
                        name="Asvie" 
                        description=" Asvie, a virtual integrated voice assistant, is based on Edward Jarvis' famous Artificial Intelligence Assistant, Jarvis, from the Marvel universe. 
                        The main goal of this project is to create a Jarvis that is compatible with Ashesi students. It is a tool for keeping students up to date on events, academic assignments, 
                        and aid with research. With verbal cues in the form of requests, students are able to retrieve their grades, upcoming assignments, lectures with the times and locations they occur at, 
                        read their emails and make internet searches." 
                    />
                </SwiperSlide>
                
                <SwiperSlide>
                    <MobileAppView 
                        image={mySafeCampus} 
                        name="My Safe Campus" 
                        description=" My Safe Campus is a system that aims to allow members of a local university to report cases of sexual misconduct easily 
                        and train them on the university's sexual misconduct policies. The training system and the incident reporting system are two of its components. 
                        The reporting system which is the mobile application enables users to report and raise alarms of incidences of sexual misconduct, 
                        while the training system, the web application, instructs and tests the users on appropriate sexual misbehavior through lessons and quizzes.
                        " 
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <WebAppView 
                        image={spearCapital} 
                        name="Spear Capital & Advisory" 
                        description=" A website for Spear Capital Advisory Limited; a Ghanaian company that aids other enterprises to upscale their businesses. " 
                        color= "#ffffff"
                        link="https://www.spearcapitaladvisory.com"

                    />
                </SwiperSlide>
                
                <SwiperSlide>
                    <MobileAppView 
                        image={ashesiCom} 
                        name="AshesiCom" 
                        description=" A twitter clone for the community of a local university. It allows people belonging to this community to share their thoughts, 
                        current status and updates with the rest of the community through posts. Users of this application can react through likes, 
                        comments and reposts with these posts to create a sense of community through the interaction." 
                        link="https://github.com/Dredayduncan/AshesiComAppWithFlutter"
                    />
                </SwiperSlide>
        
            </Swiper>

        </div>

        
               
        
          
        <div className="d-flex justify-content-center pt-5 pb-5">
            <HireButton width="300px" text="Check out my GitHub for more projects" />
        </div>

    </section>
}

export default Portfolio;