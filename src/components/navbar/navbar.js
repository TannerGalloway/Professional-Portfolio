import React, { Component } from 'react';
import "./navbar.css";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-scroll";
import Resume from "../../images/Resume.pdf";

class Navigation extends Component{
    
    render(){
        return(
            // navbar hamburger icon on smaller screens
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
            <Navbar.Brand id="brand">TG</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    {/* scroll to home */}
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {1000}
                    >Home</Link>

                    {/* scroll to about */}
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration= {1000}
                    >About</Link>

                    {/* scroll to skills */}
                    <Link
                        activeClass="active"
                        to="skills-content"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration= {1000}
                    >Skills</Link>

                    {/* scroll to projecets */}
                    <Link
                        activeClass="active"
                        to="projects-content"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration= {1000}
                    >Projects</Link>

                    {/* scroll to contact */}
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration= {1000}
                    >Contact</Link>

                    <Nav.Link href={Resume} target="parent">Resume</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://github.com/TannerGalloway?tab=repositories" target="blank"><i className="fab fa-github"></i></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/tanner-galloway-094970183/" target="blank"><i className="fab fa-linkedin"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
};

export default Navigation;