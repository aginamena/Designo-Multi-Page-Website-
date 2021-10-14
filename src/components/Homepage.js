import React, { useState } from "react";
import Navigation from "./Navigation";
import "../sassFiles/Homepage.scss";
import ImageDescription from "./ImageDescription";
import Features from "./Features";
import { Link } from "react-router-dom";

export default function Homepage(props) {
    const [width, setWidth] = useState(window.innerWidth);
    if (width > 992) {
        document.querySelector("#root").style = "height:2940px";
    }
    if (width < 992) {
        document.querySelector("#root").style = "height:4140px";
    }
    if (width <= 540) {
        document.querySelector("#root").style = "height:4890px";
    }
    // scroll to top of page when component loads
    window.scrollTo(0, 0);
    window.addEventListener("resize", () => { setWidth(window.innerWidth) });
    return (
        <>
            <div id="homepage" className="container">
                <div id="homepage-heading"
                    style={{ backgroundImage: "url(./assets/home/desktop/bg-pattern-hero-home.svg)" }}
                >
                    <div className="container">
                        <h1>Award-winning custom designs and digital branding solutions</h1>
                        <div>
                            With over 10 years in the industry, we are experienced in creating
                            fully responsive websites, app design, and engaging brand experiences.
                            Find out more about our services.
                        </div>
                        <Link to="/AboutUs"><button>LEARN MORE</button></Link>
                    </div>
                    <img src="./assets/home/desktop/image-hero-phone.png" />
                </div>
                <div id="homepageImages">
                    <ImageDescription
                        imgSrc="./assets/home/desktop/image-web-design-large.jpg"
                        isLarge={true}
                        description="WEB DESIGN"
                        goUp={name => props.goUp(name)}
                    />
                    <div id="homepageImagesSmall">
                        <ImageDescription
                            imgSrc="./assets/home/desktop/image-app-design.jpg"
                            isLarge={false}
                            description="APP DESIGN"
                            goUp={name => props.goUp(name)}
                        />
                        <ImageDescription
                            imgSrc="./assets/home/desktop/image-graphic-design.jpg"
                            isLarge={false}
                            description="GRAPHIC DESIGN"
                            goUp={name => props.goUp(name)}
                        />
                    </div>
                </div>
                <div id="homepageFeatures">
                    <Features
                        imgSrc="./assets/home/desktop/illustration-passionate.svg"
                        heading="PASSIONATE"
                        containsButton={false}
                        description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
                    />
                    <Features
                        imgSrc="./assets/home/desktop/illustration-resourceful.svg"
                        heading="RESOURCEFUL"
                        containsButton={false}
                        description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
                    />
                    <Features
                        imgSrc="./assets/home/desktop/illustration-friendly.svg"
                        heading="FRIENDLY"
                        containsButton={false}
                        description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
                    />
                </div>
            </div>
        </>
    )
}