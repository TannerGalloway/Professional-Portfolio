import React from "react";
import "./project-link-mediumViewport.css";
import { Button } from 'react-bootstrap';

function Project(props){
    return(
        <div className="work">
        <img src={props.src} alt={props.name}></img>
        <h3>{props.name}</h3>
        <p className="projectlanguages">{props.languages}</p>
        <a href={props.webpage} target="blank"><Button className="ProjectButton" variant="danger">View Webpage</Button></a>
        <a href={props.code} target="blank"><Button className="ProjectButton" variant="danger">View Code</Button></a>
      </div>
    );

};

export default Project; 