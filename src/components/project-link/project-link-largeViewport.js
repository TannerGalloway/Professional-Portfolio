import React from "react";
import "./project-link-largeViewport.css";
import { Button } from 'react-bootstrap';

function Project(props){
    return(
        <div className="workDone">
            <img className="image" src={props.src} alt={props.name}></img>
            <div className="overlay">
                <div className="project-details">
                    <h3 className="projectName">{props.name}</h3>
                    <p className="projectlanguages">{props.languages}</p>
                    <a href={props.webpage} target="blank"><Button className="project-button webpagebutton" variant="danger">View Webpage</Button></a>
                    <a href={props.code} target="blank"><Button className="project-button codebutton" variant="danger">View Code</Button></a>
                </div>
            </div>
        </div>
    );
};

export default Project;