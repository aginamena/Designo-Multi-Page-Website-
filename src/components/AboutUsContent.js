import React from "react";
import "../sassFiles/AboutUsContent.scss";

export default function AboutUsContent(props) {
    return (
        <div className="container" id="aboutUsContent"
            style={props.shouldReverse ? { flexDirection: "row-reverse" } : { flexDirection: "row" }}
        >
            <img src={props.imgSrc} />
            <div className="container">
                <h2>{props.heading}</h2>
                <div style={{ marginBottom: "24px" }}> {props.description1} </div>
                <div> {props.description2} </div>
            </div>
        </div>
    )
}