import HireButton from "../components/HireButton";
import LittleLabel from "../components/LittleLabel";
import SkillIcon from "../components/SkillIcon";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import python from "../images/python.png";
import figma from "../images/figma.png";
import github from "../images/github.png";
import sql from "../images/mysql.PNG";
import java from "../images/java.svg";
import php from "../images/php.png";
import flutter from "../images/flutter.png";
// import react from "../images/react.png";


function Skills(){

    return <section id="skills">
        <div className="container">

            <div className="row">
                <div className="col-lg-6" >
                    <LittleLabel text="MY SKILLS"/>
                    <h1>What My Programming Skills Include?</h1>
                    <p>
                    I am a highly versatile and adaptive individual who can work across divergent
                    environments and with various techonologies, constantly learning and improving 
                    on skill set. Having worked on mobile, web and back-end development, I have 
                    a lot of experience with technologies such as Flutter, Python, Java, HTML, CSS,
                    JavaScript, PHP, Figma, and Git.
                    </p>

                    <HireButton text="Hire Me" width="150px" />

                </div>
                <div className="phone col-lg-6">
                    <div id="skillRow" className="row skillsIcons" style={{"margin-top": "16%", "margin-left": "15%"}}>
                        <SkillIcon icon={html}/>
                        <SkillIcon icon={css}/>
                        <SkillIcon icon={javascript}/>
                        <SkillIcon icon={figma}/>
                        <SkillIcon icon={github}/>
                        <SkillIcon icon={python}/>
                        <SkillIcon icon={sql}/>
                        <SkillIcon icon={java}/>
                        <SkillIcon icon={php}/>
                        <SkillIcon icon={flutter}/>
                        
                    </div>
                </div>
            </div>

        </div>
        
        
        
    </section>;

}

export default Skills;