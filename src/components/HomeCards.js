import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

function HomeCards(props){
    const {icon, value, label} = props;


    const rightArrow = <FontAwesomeIcon className='text-light' icon={faAngleRight} />;

    return <div className="d-flex justify-content-between shadow col-md-3 col-sm rounded p-3">
   
      <div className="d-flex align-items-center">
        <img src={icon} width="50" alt="..."></img>
      </div>
      <div className="d-flex align-items-center">
        <div>
          <h5 className="card-title orangeText">{value}</h5>
          <p className="pt-2 card-text">{label}</p>
        </div>
      </div>
      <div className="d-flex align-items-center">
        {rightArrow}
      </div>
    {/* </div> */}
  </div>
}

export default HomeCards;