function LongImageCard(props){
    return <a href={props.link} target="_blank" rel="noreferrer"><div className="imageCard" style={{"height": "65%", "padding-bottom": "16px"}}>
        <img src={props.image} className="shadow-lg" style={{"height": "100%", "width": "100%", "border-radius": "10px"}}  alt=""/>
        <div class="middle">
            <div class="text">
            {props.description}
            </div>
        </div>
    </div>
    </a>
    ;
}

export default LongImageCard;