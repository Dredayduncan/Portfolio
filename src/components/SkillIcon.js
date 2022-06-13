function SkillIcon(props){
    const skillIconStyle = {
        "background": "#383E45",
        "box-sizing":"border-box", 
        "padding-top": "3%", 
        "padding-bottom": "2%", 
        "margin-bottom": "3%",
        "margin-right": "3%",
        "padding-left": "4%"
    }

    return <div className="skillIcon rounded col-sm" style={skillIconStyle}>
        <img src={props.icon} width="48" alt="..." />
    </div>
}

export default SkillIcon;