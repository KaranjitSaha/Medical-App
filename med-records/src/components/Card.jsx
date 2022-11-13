import React from "react";

const Card = (props) => {
    return (
        <div class="card text-bg-dark mb-3" style={{ "width": "50rem", "height": "15rem" }}>
            <div class='row'>
                <div class="card-header">{props.name} <input type='checkbox' style={{"float":"right","marginRight":"1rem","width":"1rem", "height":"1rem", "background-color":"green"}}></input></div>
                
            </div>

            <div class="card-body">
                <h5 class="card-title">{props.doctorName}</h5>
                <p class="card-text">Time of issuing the document - {props.time}</p>
                <p class="card-text">Issue date - {props.issue}</p>
                <p class="card-text">Type of document - {props.typeofdoc}</p>
            </div>
        </div>
    )
}
export default Card;