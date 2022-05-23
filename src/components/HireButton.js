function HireButton(props){
    const buttonStyle = {
        "width": props.width
    };

    return <button className="navButton" style={buttonStyle}>
        <p>Hire Me</p>
    </button>;  

}

export default HireButton;