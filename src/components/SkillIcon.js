function SkillIcon(props){
    const skillIconStyle = {
        "background": "#383E45",
        "box-sizing":"border-box", 
        "padding-top": "3%", 
        "padding-bottom": "2%", 
        "margin-bottom": "3%",
        "margin-right": "3%",
        "padding-left": "3.3%"
    }

    return <div className="rounded col-sm" style={skillIconStyle}>
        <img src={props.icon} width="38" alt="..." />
    </div>
}

export default SkillIcon;