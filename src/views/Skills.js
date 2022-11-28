import React from 'react';
import HireButton from "../components/HireButton";
import LittleLabel from "../components/LittleLabel";
import SkillIcon from "../components/SkillIcon";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import python from "../assets/images/python.png";
import figma from "../assets/images/figma.png";
import github from "../assets/images/github.png";
import sql from "../assets/images/mysql.PNG";
import java from "../assets/images/java.svg";
import php from "../assets/images/php.png";
import flutter from "../assets/images/flutter.png";
import django from "../assets/images/django.png";


function Skills(){

    return <section id="skills" data-scroll-section>
        <div className="container">

            <div className="skills-body d-flex align-items-center h-100">
                <div className='skills-text' data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
                    <LittleLabel text="MY SKILLS"/>
                    <h1>What My Programming Skills Include?</h1>
                    <p className='skills-text-two mb-0'>
                    I am a highly versatile and adaptive individual who can work across divergent
                    environments and with various technologies, constantly learning and improving 
                    on skill set. 
                    <br></br>
                    <br></br>
                
                    Having worked on mobile, web and back-end development, I have 
                    a lot of experience with technologies such as Flutter, Python, Java, HTML, CSS,
                    JavaScript, PHP, Figma, and Git.
                    </p>

                    <HireButton text="Hire Me" width="150px" />

                </div>
     
                <div id="skillRow" className='d-flex'>
                    <div data-scroll data-scroll-speed="1">
                        <SkillIcon icon={flutter}/>
                        <SkillIcon icon={java}/>
                        <SkillIcon icon={sql}/>
                    </div>
                    <div data-scroll data-scroll-speed="-1">
                        <SkillIcon icon={python}/>
                        <SkillIcon icon={html}/>
                        <SkillIcon icon={github}/>
                    </div>
                    <div data-scroll data-scroll-speed="1">
                        <SkillIcon icon={django}/>
                        <SkillIcon icon={css}/>
                        <SkillIcon icon={figma}/>
                    </div> 
                    <div data-scroll data-scroll-speed="-1">
                        <SkillIcon icon={php}/>
                        <SkillIcon icon={javascript}/>
                    </div>               
                </div>
                
            </div>

        </div>
        
        
        
    </section>;

}

export default Skills;