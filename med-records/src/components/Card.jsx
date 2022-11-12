import React from "react";

const Card = (props) => {
    return (
        <div class="card text-bg-dark mb-3" style={{"width": "50rem","height":"15rem"}}>
            <div class="card-header">{props.header}</div>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
            </div>
        </div>
    )
}
export default Card;