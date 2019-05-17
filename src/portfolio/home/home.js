import React, {Component} from "react";
import "./home.css";
import { Button } from 'react-bootstrap';
import Particles from 'react-particles-js';
import {Link} from "react-scroll";

class Home extends Component{
	
    render(){
        return(//home page (top)
		<div className="home">
			<div className="intro">
				<h1 className="logo">TG</h1>
				<h1 className="intro-title">Tanner Galloway</h1>
				<h1 className="intro-role">a junior web developer</h1>
				<h1 className="intro-subtitle">with a passion for improvement.</h1>
				<Link
                    to="about"
                    smooth={true}
                    offset={-50}
                    duration= {1000}
					><Button className="buttonHome" variant="danger">Learn More <i className="fas fa-arrow-down"></i></Button>
				</Link>
			</div>
			
			{/* particles config div */}
            <div id="particles">
            <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    }
	}} />   </div>
            
    </div>
        );
    };
};
export default Home;