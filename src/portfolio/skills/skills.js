import React, {Component} from "react";
import "./skills.css";
import Skillsdiv from "../../components/skills/skills-image";

// front-end skills images
import html_logo from "../../images/front-end-skills/html_logo.png";
import css_logo from "../../images/front-end-skills/css_logo.png";
import js_logo from "../../images/front-end-skills/js_logo.png";
import jquery_logo from "../../images/front-end-skills/jquery_logo.png";
import bootstrap_logo from "../../images/front-end-skills/bootstrap_logo.png";
import handlebarsJS_logo from "../../images/front-end-skills/handlebars-js_logo.png";
import nodeJS_logo from "../../images/front-end-skills/nodejs_logo.png";
import expressJS_logo from "../../images/front-end-skills/expressjs_logo.png";
import reactJS_logo from "../../images/front-end-skills/reactjs_logo.png";

// back-end skills images
import mysql_logo from "../../images/back-end-skills/MySQL_logo.png";
import sequelize_logo from "../../images/back-end-skills/sequelize_logo.png";
import mongoDB_logo from "../../images/back-end-skills/MongoDB_logo.png";
import mongoose_logo from "../../images/back-end-skills/mongoose_logo.png";
import firebase_logo from "../../images/back-end-skills/firebase_logo.png";

class Skills extends Component{
    
    render(){
        return(
            <div className="skills-content">
                <div className="title">
                    <h2>skills</h2>
                    <hr></hr>
                </div>
                <div className="content">
                        <p className="skillsParagraph">My main area of expertise is Front-end developement.
                        <br></br>
                        Though I also have Back-end development experience.
                        </p>

                        <div className="skills front-end">
                            <h5 className="skillBoxText">Front-End:</h5>
                            <Skillsdiv src={html_logo} alt="Html Logo"/>
                            <Skillsdiv src={css_logo} alt="CSS Logo"/>
                            <Skillsdiv src={js_logo} alt="Javascript Logo"/>
                            <Skillsdiv src={jquery_logo} alt="Jquery Logo"/>
                            <Skillsdiv src={bootstrap_logo} alt="Bootstrap Logo"/>
                            <Skillsdiv src={nodeJS_logo} alt="Node js Logo"/>
                            <Skillsdiv src={reactJS_logo} alt="React js Logo"/>
                            <Skillsdiv src={handlebarsJS_logo} alt="Handlebars js Logo"/>
                        </div>

                        <div className="skills back-end">
                            <h5 className="skillBoxText">Back-End:</h5>
                            <Skillsdiv src={mysql_logo} alt="My SQL Logo"/>
                            <Skillsdiv src={sequelize_logo} alt="Sequelize Logo"/>
                            <Skillsdiv src={mongoDB_logo} alt="Mongo DB Logo"/>
                            <Skillsdiv src={mongoose_logo} alt="Mongoose Logo"/>
                            <Skillsdiv src={firebase_logo} alt="Firebase Logo"/>
                            <Skillsdiv src={expressJS_logo} alt="Express js Logo"/>
                        </div>
                        <br></br>
                </div>
                
            </div>
        );
    };
};

export default Skills;