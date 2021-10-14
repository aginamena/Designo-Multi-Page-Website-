import React from "react";
import "../sassFiles/DesignsHeading.scss";

export default function DesignsHeading(props) {
    return (
        <div style={{ backgroundImage: "url(./assets/shared/desktop/bg-pattern-intro-web.svg)" }}
            id="designsHeading" className="container">
            <h1>{props.heading}</h1>
            <div>{props.description}</div>
        </div>
    )
}