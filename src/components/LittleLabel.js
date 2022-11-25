import React from 'react';

function LittleLabel(props){
    
    return <div className="d-flex mb-3 justify-content-center little shadow rounded-pill">
        <div className='d-flex align-items-center'>
            <h6 className="orangeText">{props.text}</h6>
        </div>
       
    </div>;
}

export default LittleLabel