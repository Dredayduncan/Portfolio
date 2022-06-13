import cv from "../images/AndrewDuncan.pdf";

function HireButton(props){
    const buttonStyle = {
        "width": props.width
    };

    if (props.text === "Hire Me"){
        return <a href={cv} target="_blank" rel="noreferrer"><button className="navButton" style={buttonStyle}>
            <p>{props.text}</p>
        </button>
        </a>
    }

    return <a href="https://github.com/Dredayduncan" target="_blank" rel="noreferrer"><button className="navButton" style={buttonStyle}>
        <p>{props.text}</p>
    </button>
    </a>
    ;  

}

export default HireButton;