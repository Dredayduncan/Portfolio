import React from 'react';
import LittleLabel from "../components/LittleLabel";
import displayPicture from "../assets/images/andrewtrans.png";

/**
 * It returns a section element with an id of "about" and a div element with a class of "container" and
 * a div element with a class of "row justify-content-between" and a div element with a class of
 * "col-md-7" and a div element with a class of "col-md-5" and a LittleLabel component and an h1
 * element and a p element and a HireButton component
 * @returns A section with an id of about.
 */
function About(){
    return <section id="about" className='ps-5'>
        
            <div className="d-flex justify-content-center align-items-center h-100">

                
                <div className='about-picture'>
                    <img className='displayPicture' src={displayPicture} alt="image"/>
                </div>

                
                
                <div className='about-info'>
                    <LittleLabel text="WHO I AM"/>
                    
                    
                    
                    <h1>About Me</h1>

                    <p className='about-body'>
                        My name is Andrew Duncan. I am a Ghanaian Software Engineer, Back-End Developer, and Mobile
                        Application Developer. I have a Bachelor of Science in Computer Science at Ashesi
                        University in Ghana. 
                        <br></br>
                        <br></br>
                        I have worked at ExpressPay Ghana Limited as a Data Engineer Intern
                        where I built front-end representations of their data using Python, Dash by Plotly and Flask.
                        I have also been involved with the developments of websites and web applications for various 
                        clients.
                        <br></br>
                        <br></br>
                         I am a car enthusiast, basketball lover, and a huge fanatic of videography and photography. 
                    </p>
                </div>
            </div>
        
    </section>;
}

export default About