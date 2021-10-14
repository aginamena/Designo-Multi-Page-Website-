import React from "react";
import "../sassFiles/DesignImages.scss";

export default function DesignImages(props) {
    return (
        <div className="devImages">
            <img src={props.src} />
            <div>
                <div className="heading">{props.heading}</div>
                <div className="text">{props.text}</div>
            </div>
        </div>
    )
}