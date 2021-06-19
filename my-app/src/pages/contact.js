import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (
        <div className="contactApp">
<div className="container">
        <div className="card">
                    <div className="card-header">
                        <h3>Contact</h3>
                    </div>
            <div className="card-body">
                <p>GitHub Repositories: <a href="https://github.com/snbarnhouse" target = "_blank">
                https://github.com/snbarnhouse</a> </p>
                <p>Linkedin: <a href="https://www.linkedin.com/in/stephanie-barnhouse-0b6965a7/" target ="_blank">https://www.linkedin.com/in/stephanie-barnhouse-0b6965a7/</a> </p>
                <p>Resume: <a href="https://docs.google.com/document/d/16y3QFnPuZsyi8BuAgHWPJtYT64PJ6ZoS7XmnsUnMfVk/edit?usp=sharing" target= "_blank">My Resume</a></p>
                <p>Email: snbarnhouse@yahoo.com</p>
                <br></br>
                <blockquote className="blockquote mb-0">
                            <div className="input-group">
                        <div className="input-group-prepend">
                                    <span className="input-group-text">First and last name</span>
                                </div>
                                <input type="text" aria-label="First name" className="form-control" />
                                    <input type="text" aria-label="Last name" className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                        </div>
                                        <input type="text" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Message</span>
                                            </div>
                                            <textarea name="input" id="input" cols="30" rows="5"></textarea>
                                        </div>
                                        <input className="btn btn-primary" type="submit" value="Submit" />
                </blockquote>
                        
                                    </div>
        </div>
                            </div>

        </div>
                        )
                    }
export default Contact