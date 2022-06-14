import LittleLabel from "../components/LittleLabel";
import LongImageCard from "../components/LongImageCard";
import SmallImageCard from "../components/SmallImageCard";
import asvie from "../images/mainScreen.png";
import spearCapital from "../images/spearCapital.png";
import ashesiCom from "../images/ashComHome.png";
import goInside from "../images/goInside.png";
import dreMail from "../images/DreMail.png";
import HireButton from "../components/HireButton";
import mySafeCampus from "../images/mySafeCampus.png";

function Portfolio(){
    return <section id="portfolio">
        <div className="container">
            <div className="row justify-content-center">
                <LittleLabel text="MY WORKS"/>
                <h1>Featured Works</h1>
            </div>
        </div>
        
        <div className="container">
            <div className="row g-3">
                <div className="col-sm-4" >
                    <div style={{"height": "800px"}}>
                        <LongImageCard 
                            image={ashesiCom} 
                            link="https://drive.google.com/file/d/1TWkuNuHVB7L_nkF9l1pcisSrDwAqXd3f/view?usp=sharing" 
                            description= "A twitter clone built for the Ashesi University community to enhance local interaction."
                        />
                        <SmallImageCard 
                            image={asvie} 
                            link="https://drive.google.com/file/d/19pRxswl95-3_RjqKYP7ZOfHL-AVWLOMu/view?usp=sharing"
                            description ="A virtual assistant developed to give Ashesi students the ability to perform operations by voice."
                        />
                    </div>
                    
                </div>
                <div className="col-sm-4" >
                    <div style={{"height": "800px"}}>
                        <SmallImageCard 
                            image={spearCapital} 
                            link="https://spearcapitaladvisory.com"
                            description="A website for a company seeking to help grow smaller business in Ghana."
                        />
                        <LongImageCard 
                            image={goInside} 
                            link="https://github.com/Dredayduncan/GoInside_Fitness_Mobile_Application"
                            description="A mobile application where people can register, and keep track of their workout schedules." 
                        />
             
                    </div>
                    
                </div>
                <div className="col-sm-4" >
                    <div style={{"height": "800px"}}>
                        <LongImageCard 
                            image={dreMail} 
                            link="https://drive.google.com/file/d/178K8kJW4qouri9zyhusUz3fCfZ-PUlp_/view?usp=sharing" 
                            description="An outlook clone which possesses the functionalities of a typical email application."
                        />
                        <SmallImageCard 
                            image={mySafeCampus} 
                            description="A mobile application that allows Ashesi Students to report cases of sexual misconduct and contact emergency services."
                        />
                    </div>
                    
                </div>
               
            </div>
        </div>
        <div className="container" style={{"margin-top": "80px", "padding-bottom": "30px"}}>
            <HireButton width="300px" text="Check out my GitHub for more projects" />
        </div>
        

    </section>
}

export default Portfolio;