import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Portfolio: Stephanie Barnhouse
                    </h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                            </div>

                            <div className="col-md-3">
                                <a href="https://writers--block.herokuapp.com/" target ="_blank">
                                    <img src="https://user-images.githubusercontent.com/77131387/119272763-a1af9900-bbd5-11eb-8f9a-05532d24ad76.png" alt= "writer's block"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <br></br>
                                <br></br>
                                <p className="card-text">Project 2: Writer's Block</p>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://zchalk.github.io/sk8erboyz/" target= "_blank">
                                    <img src="https://user-images.githubusercontent.com/77131387/112699823-07480900-8e63-11eb-82c2-04e2aa822bab.png"
                                        className="card-img-top" alt= "Endless Pawsabilities" />
                                </a>
                                <br></br>
                                <br></br>
                                <p className="card-text">Project 1: Endless Pawsabilities</p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://enigmatic-bastion-47629.herokuapp.com/" target ="_blank">
                                    <img src="https://user-images.githubusercontent.com/77131387/119272951-9f9a0a00-bbd6-11eb-98e9-a936a80f27bc.png"
                                        className="card-img-top" alt="note taker" />
                                </a>
                                <br></br>
                                <br></br>
                                <p className="card-text">Note Taker</p>
                            </div>
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://snbarnhouse.github.io/work_day_scheduler/" target= "_blank">
                                    <img src="https://user-images.githubusercontent.com/77131387/119273002-e687ff80-bbd6-11eb-8bfd-6535fadaff1c.png"
                                        className="card-img-top" alt="work_day_scheduler" />
                                </a>
                                <br></br>
                                <br></br>
                                <p className="card-text">Work Day Scheduler</p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a href="https://snbarnhouse.github.io/password_generator/" target= "_blank">
                                    <img src="https://user-images.githubusercontent.com/77131387/119273035-091a1880-bbd7-11eb-8e38-91f38fbbaed8.png"
                                        className="card-img-top" alt="password_generator" />
                                </a>
                                <br></br>
                                <br></br>
                                <p className="card-text">Password Generator</p>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://agile-basin-17508.herokuapp.com/" target= "_blank">
                                    <img src="https://user-images.githubusercontent.com/77131387/120815966-50c96a00-c51e-11eb-842a-0e347e4913cd.png"
                                        className="card-img-top" alt="workout_tracker" />
                                </a>
                                <br></br>
                                <br></br>
                                <p className="card-text">Workout Tracker</p>

                            </div>
                        </div>
                        <br></br>
                    </div>

                </div>






            </div>
        </div>
    )
}
export default portfolio