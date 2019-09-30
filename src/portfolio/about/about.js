import React, {Component} from "react";
import "./about.css";

class About extends Component{
    render(){
        return(
            <div className="about">
                <div className="title">
                    <h2>about</h2>
                    <hr></hr>
                </div>
                <div className="aboutParagraph">
                    <p>Over the years I have devloped a love in the subject of technology, more specificly web developemnt. As an eager Junior Web Devloper I am <span className="highlight"> highly adaptable</span> and <span className="highlight">driven</span> by learning. The appeal that web development has on me is having the ability to create a stunning website that not only looks good but functions as well as it looks. Regarded by my peers to be a <span className="highlight">highly communicative </span>individual while collaborating with others or working independently. I am a very <span className="highlight">tenacious</span> person when presented with a problem and have the <span className="highlight">desire</span> to seek out solutions to the given problem. If you would like to get to know me better feel free to contact me.
                    </p>
                </div>
                <br></br>
            </div>
        );
    };
};

export default About;                                                                                       