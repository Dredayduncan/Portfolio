import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

function MobileAppView(props){
    let viewLink = props.link;

    let viewbutton = <div className='pt-2'>
        <a href={props.link} className='orangeText text-decoration-none' target="_blank" rel="noopener noreferrer">
            View more 
            <span> <FontAwesomeIcon icon={faAnglesRight} /> </span>
        </a>
    </div>

    return <div className="d-flex align-items-center h-100 carou-item">
        <div>
            <div>
                <img className='project-image' src={props.image} alt="..."></img>
            </div>
        </div>
        <div>
            <h3 className='orangeText'>{props.name}</h3>
            <p>{props.description}</p>
            {viewLink ? viewbutton : ""}
        </div>
    </div>;
}

export default MobileAppView;