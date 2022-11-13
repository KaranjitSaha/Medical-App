import { Button } from "bootstrap";
import React from "react";
import './card.css';
const Card = (props) => {
    return (
        <div class="card text-bg-dark mb-3 " style={{ fontSize: 20 }}>
            <div class='row'>
                <div class="card-header">{props.name} <input type='checkbox' style={{ "float": "right", "marginRight": "1rem", "width": "1rem", "height": "1rem" }}></input></div>

            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div class="card-body">
                            <h5 class="card-title">{props.doctorName}</h5>
                            <p class="card-text">Time of issuing the document - {props.time}</p>
                            <p class="card-text">Issue date - {props.issue}</p>
                            <p class="card-text">Type of document - {props.typeofdoc}</p>
                        </div>
                    </div>
                    <div class="col">
                        <button class="btn btn-dark btn-lg" style={{marginTop:"15%"}}>View Document</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;