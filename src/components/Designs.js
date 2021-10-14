import React, { useState } from "react";
import DesignsHeading from "./DesignsHeading";
import "../sassFiles/Designs.scss";
import ImageDescription from "./ImageDescription";
import DesignImages from "./DesignImages";

export default function Designs(props) {
    const [width, setWidth] = useState(window.innerWidth);
    if (props.input.heading == "Web Design") {
        if (width > 992) {
            document.querySelector("#root").style = "height:3100px";
        }
        if (width <= 992) {
            document.querySelector("#root").style = "height:4190px";
        }
        if (width <= 540) {
            document.querySelector("#root").style = "height:5770px";
        }
    }
    else if (props.input.heading == "Graphic Design") {
        if (width > 992) {
            document.querySelector("#root").style = "height:2400px";
        }
        if (width <= 992) {
            document.querySelector("#root").style = "height:3080px";
        }
        if (width <= 540) {
            document.querySelector("#root").style = "height:4180px";
        }
    }
    else {
        if (width > 992) {
            document.querySelector("#root").style = "height:3100px";
        }
        if (width <= 992) {
            document.querySelector("#root").style = "height:3800px";
        }
        if (width <= 540) {
            document.querySelector("#root").style = "height:5250px";
        }
    }

    // scroll to top of page when component loads
    window.scrollTo(0, 0);
    window.addEventListener("resize", () => { setWidth(window.innerWidth) });
    return (
        <>
            <DesignsHeading
                heading={props.input.heading}
                description={props.input.description}
            />
            <div id="designBody" className="container">
                {props.input.design_image.map((item, index) =>
                (<DesignImages
                    src={item.img}
                    heading={item.heading}
                    text={item.body}
                    key={index}
                />)
                )}
            </div>
            <div id="designDes" className="container">
                <ImageDescription
                    description={props.input.related_designs[0].toUpperCase()}
                    imgSrc="./assets/home/desktop/image-app-design.jpg"
                    isLarge={false}
                    goUp={name => props.goUp(name)}
                />
                <ImageDescription
                    description={props.input.related_designs[1].toUpperCase()}
                    imgSrc="./assets/home/desktop/image-graphic-design.jpg"
                    isLarge={false}
                    goUp={name => props.goUp(name)}
                />
            </div>
        </>
    )
}