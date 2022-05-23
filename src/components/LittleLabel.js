function LittleLabel(props){
    const textStyle = {
        "padding-top": "7%",
        "font-family": "InterMedium"
    }
    return <div className="shadow col-md-2 d-flex justify-content-center rounded-pill" style={{"background": "#383E45"}}>
        <h6 style={textStyle} className="orangeText">{props.text}</h6>
    </div>;
}

export default LittleLabel