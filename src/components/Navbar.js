import logo from "../images/dredayLogo.png"
import HireButton from "./HireButton";

/**
 * The Navbar function returns a section element with a className of row. Inside the section element is
 * a div element with a className of navBar. Inside the div element are five anchor elements with href
 * attributes and text
 * @returns A section with a row and a div with a class of navBar.
 */
function Navbar(){
    const background = {background: '#212529'};
    return <div className="d-flex justify-content-around navSection" style={background}>
        <div>
            <img src={logo} alt="" height="80"/>
        </div>
        <div className="navBar">
            <a className="active" href="#home">Home</a>
            <a href="#news">About</a>
            <a href="#contact">Skills</a>
            <a href="#about">Portfolio</a>
            <a href="#about">Contact</a>
        </div>
        <div>
        <HireButton />
    </div>
        
    
  </div>;
}

export default Navbar;