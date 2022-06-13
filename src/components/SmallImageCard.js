function SmallImageCard(props){
    return <a href={props.link} target="_blank" rel="noreferrer"><div className="imageCard" style={{"height": "40%", "padding-bottom": "16px"}}>
        <img src={props.image} style={{"height": "100%", "width": "100%", "border-radius": "10px"}}  alt=""/>
        <div class="middle">
            <div class="text">
                {props.description}
            </div>
        </div>
    </div>
    </a>
}

export default SmallImageCard;