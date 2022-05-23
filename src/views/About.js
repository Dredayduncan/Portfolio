import HireButton from "../components/HireButton";
import LittleLabel from "../components/LittleLabel";
import displayPicture from "../images/andrewtrans.png";

function About(){
    return <section id="about" className="aboutSection d-flex">

        <div style={{"margin-top": "-12%"}}>
            <img src={displayPicture} width="800" alt=""/>
        </div>
    
        <div>
            <LittleLabel text="WHO I AM"/>
            <h1>About Me</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non p
                roident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <HireButton width="150px"/>
        </div>
        
    </section>
}

export default About