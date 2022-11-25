import React from 'react';

function MobileAppView(props){
    return <div className="d-flex align-items-center h-100 carou-item" style={{"padding": "0 5%"}}>
        <div>
            <div>
                <img className='project-image' src={props.image} alt="..."></img>
            </div>
        </div>
        <div>
            <h3 className='orangeText'>{props.name}</h3>
            <p>{props.description}</p>

        </div>
    </div>;
}

export default MobileAppView;