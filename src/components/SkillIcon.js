import React from 'react';

function SkillIcon(props){

    return <div className="d-flex justify-content-center skillIcon rounded col-sm">
        <img src={props.icon} alt="..." />
    </div>
}

export default SkillIcon;