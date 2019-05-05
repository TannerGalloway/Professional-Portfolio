import React from "react";
import "./contact.css";
import {Button} from "react-bootstrap";


function Contact(props){
        return(
            <div className="contact">
                <div className="contact-title">
                    <h2>Contact</h2>
                    <hr></hr>
                    <h4 className="subtitle">Have a question or want to know more?</h4>
                </div>
                <div className="contact-form">
                    <div className="formBox">

                      {/* contact form */}
                      <form method="POST" action="https://formspree.io/tannergalloway15@gmail.com">
                        <input type="email" id="email" name="email" placeholder="Email" size="40" required></input>
                        <input type="text" id="subject" name="subject" placeholder="Subject" size="40" required></input>
                        <textarea  id="message" name="message" placeholder="Your Message"  rows="7" cols= {props.column} required></textarea>
                        <Button id="contactButton" variant="danger" type="submit">Send</Button>
                      </form>
                    </div>
                </div>  
            </div>
        );
};

export default Contact;