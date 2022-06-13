function LittleLabel(props){
    const textStyle = {
        "padding-top": "5%",
        "font-family": "InterMedium"
    }
    return <div className="little shadow col-md-3 d-flex justify-content-center rounded-pill" style={{"background": "#383E45"}}>
        <h6 style={textStyle} className="orangeText">{props.text}</h6>
    </div>;
}

export default LittleLabel