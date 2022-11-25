import React from 'react';
import logo from "../assets/images/dredayLogo.png"
import HireButton from "./HireButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

/**
 * The Navbar function returns a section element with a className of row. Inside the section element is
 * a div element with a className of navBar. Inside the div element are five anchor elements with href
 * attributes and text
 * @returns A section with a row and a div with a class of navBar.
 */
function Navbar(){


    /* Creating a state variable called menuDisplay and setting it to false. */
    const [menuDisplay, setMenuDisplay] = useState(false);

    /**
     * If the menu is not displayed, display it. If it is displayed, hide it
     */
    const displayMenu = event => {
        const menu = document.getElementsByClassName("navBar")[0];
        const menuIcon = document.getElementsByTagName("svg")[0];
        
        if (menuDisplay === false){
            menu.style.display = "block";
            menuIcon.style.marginLeft = "20px"
            menu.style.marginRight = "-50px"
            setMenuDisplay(true);
        }

        else {
            menu.style.display = "none";
            menuIcon.style.marginLeft = "0"
            menu.style.marginRight = "0"
            setMenuDisplay(false);
        }
    };

    const background = {background: '#212529'};
    const menuBar = <FontAwesomeIcon icon={faBars} />;
    return <div id="home" className="d-flex justify-content-around navSection" style={background}>
        <div>
            <img src={logo} alt="" height="80"/>
            <a className="icon" onClick={displayMenu}>
                {menuBar}
            </a>
        </div>
        <div className="navBar">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#footer">Contact</a>
        </div>
        <div>
        <HireButton text="Hire Me" width="100px" />
    </div>
        
    
  </div>;
}

export default Navbar;