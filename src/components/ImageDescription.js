import React from "react";
import "../sassFiles/ImageDescription.scss";
import { Link } from "react-router-dom"

export default function ImageDescription(props) {
    return (
        <Link to="./Designs" onClick={() => props.goUp(props.description)}
            style={
                {
                    backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + props.imgSrc + ")",
                    height: props.isLarge ? "640px" : "308px"
                }} className="imgDes">

            <h2>{props.description}</h2>
            <div>
                VIEW PROJECTS
                <img src="./assets/shared/desktop/icon-right-arrow.svg" />
            </div>
        </Link>
    )
}