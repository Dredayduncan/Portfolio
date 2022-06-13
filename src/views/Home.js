import HomeCards from "../components/HomeCards";
import experienceBadge from "../images/ExperienceBadge.png";
import completedProjectsBadge from "../images/CompletedProjectsBadge.png";
import avatar from "../images/andrewmemoji.png"

/**
 * It returns a section element with a class name of homeSection
 * @returns A section with a title, a paragraph, an image, and a div with three HomeCards.
 */
function Home(){
    return  <section className="homeSection">
            <h5>Hey There, I Am <span className="orangeText"><u>Andrew Duncan</u></span> <span>👋🏽</span></h5>
            <h1>Software Engineer & Back-End Developer</h1>
             
            <p style={{"margin-top": "3%"}}>I love making the world easier and simpler one piece of code at a time.</p>

            <img src={avatar} width="300" alt=""/>
            
            <div className="homeCard row justify-content-evenly">
                <HomeCards icon={experienceBadge} value="4" label="Years Of Experience"/>
                <HomeCards icon={completedProjectsBadge} value="28" label="Completed Projects"/>
                <HomeCards icon={completedProjectsBadge} value="4" label="Satisfied Clients"/>
            </div>
            
            
    </section>;
}

export default Home;