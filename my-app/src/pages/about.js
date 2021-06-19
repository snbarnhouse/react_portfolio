import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const mainPage = () => {
    return (
        <div className="aboutApp">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
                </h3>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div className="row">
                                <div className="col-md-3">
                                    <img id="pic" src="https://lh3.googleusercontent.com/InofaKN7_G8O9hlZXSAVhCUgWL9Rycbfxqsty7Jlrd5txy-gjDbXqno_mh6q-4YwTYviwAJssWVKonCXLFTLopRm2v-wstINsgvoeKKtAbrpNAhVGlm7R19bHy7CkloUy8-7NtENaw=w2400" alt="profile_pic" width="100%" height="auto%" />
                                </div>

                                <div className="col-md-8">

                                <p>Hi! My name is Stephanie Barnhouse and I am currently enrolled in the Coding Bootcamp at the University of North Carolina at Chapel Hill. I anticipate finishing the course in July 2021.</p>
    
    <p>I currently have a bachelor's of science in animal science from North Carolina State University. I have been working in the laboratory animal care field for almost 10 years now at Duke University. I hope to transition into the web development field after graduating as a full stack developer.</p>
        
<p>Aside from coding, my hobbies include reading, hiking, going for runs, and spending time with my 2 cats Percy and Severus.</p>
   </div>
    </div>
       </blockquote>
    </div>
</div>
</div>

        </div>
    )
}
export default mainPage