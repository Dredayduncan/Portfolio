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
import react from "../images/react.png";


function Skills(){

    return <section className="row" id="skills">
        <div className="col-sm" style={{"margin-left": "5%", "margin-right": "5%"}}>
            <LittleLabel text="MY SKILLS"/>
            <h1>What My Programming Skills Include?</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            </p>

            <HireButton width="150px" />

        </div>
        <div className="col-sm">
            <div className="row col-md-10 skillsIcons" style={{"margin-top": "16%"}}>
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
                <SkillIcon icon={react}/>
                <SkillIcon icon={html}/>
            </div>
        </div>
        
        
    </section>

}

export default Skills;