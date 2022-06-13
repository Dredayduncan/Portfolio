import HireButton from "../components/HireButton";
import LittleLabel from "../components/LittleLabel";
import displayPicture from "../images/andrewtrans.png";

/**
 * It returns a section element with an id of "about" and a div element with a class of "container" and
 * a div element with a class of "row justify-content-between" and a div element with a class of
 * "col-md-7" and a div element with a class of "col-md-5" and a LittleLabel component and an h1
 * element and a p element and a HireButton component
 * @returns A section with an id of about.
 */
function About(){
    return <section id="about">
        <div className="container">
            <div className="row justify-content-between">

                <img className="dp col-lg-6" src={displayPicture} width="700" style={{"margin-top": "-6%"}} alt=""/>
                
                <div className="col-lg-6 mt-5">
                    {/* <div> */}
                    <LittleLabel text="WHO I AM"/>
                    {/* </div> */}
                    
                    <h1>About Me</h1>
                    <p>
                        My name is Andrew Duncan. I am a Ghanaian Software Engineer, Back-End Developer, and Mobile
                        Application Developer. I have a Bachelor of Science in Computer Science at Ashesi
                        University in Ghana. I have worked at ExpressPay Ghana Limited as a Data Engineer Intern
                        where I built front-end representations of their data using Python, Dash by Plotly and Flask.
                        I have also been involved with the developments of websites and web applications for various 
                        clients. I am a car enthusiast, basketball lover, and a huge fanatic of videography and photography. 
                    </p>
                    <HireButton text="Hire Me" width="150px"/>
                </div>
            </div>

        </div>

        
        
    </section>;
}

export default About