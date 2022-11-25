import React from 'react';
import HomeCards from "../components/HomeCards";
import experienceBadge from "../assets/images/ExperienceBadge.png";
import completedProjectsBadge from "../assets/images/CompletedProjectsBadge.png";
import happyClient from "../assets/images/happyClient.png";
import avatar from "../assets/images/andrewmemoji.png"

/**
 * It returns a section element with a class name of homeSection
 * @returns A section with a title, a paragraph, an image, and a div with three HomeCards.
 */
function Home(){
    return  <section className='homeSection'>

        <div className='home-body'>
            <h5>
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
            
            <div className="homeCards row justify-content-evenly">
                <HomeCards icon={experienceBadge} value="4" label="Years Of Experience"/>
                <HomeCards icon={completedProjectsBadge} value="28" label="Completed Projects"/>
                <HomeCards icon={happyClient} value="4" label="Satisfied Clients"/>
            </div>

        </div>
            
            
            
    </section>;
}

export default Home;