import React from 'react';
import cv from "../assets/images/AndrewDuncan.pdf";

function HireButton(props){
    const buttonStyle = {
        "width": props.width
    };

    if (props.text === "Hire Me"){
        return <div id='hire'>
                <a href={cv} target="_blank" rel="noopener noreferrer">
                <button className="navButton" style={buttonStyle}>
                    <p>{props.text}</p>
                </button>
            </a>

        </div>;
        
       
    }

    return <div id='hire'>
        <a href="https://github.com/Dredayduncan" target="_blank" rel="noopener noreferrer" className="navButton" style={buttonStyle}>
            <button className="navButton" style={buttonStyle}>
                <p>{props.text}</p>
            </button>
        </a>

    </div>;
}

export default HireButton;