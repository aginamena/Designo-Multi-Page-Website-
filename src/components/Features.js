import React from "react";
import "../sassFiles/Features.scss";
import { Link } from "react-router-dom";

export default function Features(props) {
    return (
        <div className="features"
        >
            <div
                style={{ backgroundImage: "url(./assets/shared/desktop/bg-pattern-three-circles.svg)" }}
            ><img src={props.imgSrc} /></div>
            <h3>{props.heading}</h3>
            {props.containsButton ? <Link to="/Location"><button>SEE LOCATION</button></Link> : <div>{props.description}</div>}
        </div>
    )
}