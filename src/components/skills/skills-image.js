import React from "react";

function skillImage(props){
    return(
        <div className="skills-div"><img className="skills-logo" src={props.src} alt={props.alt}/></div>
    );
};

export default skillImage;