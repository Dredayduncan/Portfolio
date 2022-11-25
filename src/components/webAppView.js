import React from 'react';

function WebAppView(props){
   
    return <div className="d-flex align-items-center h-100 carou-item">
    <div>
        <h3 className='orangeText'>{props.name}</h3>
        <p>{props.description}</p>

    </div>
    <div>
        <div>
            <img className='project-image' src={props.image} alt="..."></img>
        </div>
    </div>
   
</div>;
   
}

export default WebAppView;