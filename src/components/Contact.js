import React, { useState } from "react";
import "../sassFiles/Contact.scss";
import { Link } from "react-router-dom";
import Features from "./Features";
export default function Contact() {
    window.scrollTo(0, 0);
    const [width, setWidth] = useState(window.innerWidth);
    if (width > 992) {
        document.querySelector("#root").style = "height:1940px";
    }
    if (width <= 992) {
        document.querySelector("#root").style = "height:3050px";
    }
    if (width <= 540) {
        document.querySelector("#root").style = "height:3570px";
    }
    window.addEventListener("resize", () => { setWidth(window.innerWidth) });
    return (
        <div className="container" id="contactPage">
            <div style={{ backgroundImage: "url(./assets/shared/desktop/bg-pattern-small-circle.svg)" }}
                id="contactUsHeader">
                <div>
                    <h1>Contact Us</h1>
                    <div>Ready to take it to the next level? Let’s talk about your project or
                        idea and find out how we can help your business grow. If you are looking
                        for unique digital experiences that’s relatable to your users,
                        drop us a line.
                    </div>
                </div>
                <form>
                    <div><input placeholder="Name" type="text" required /></div>
                    <div><input placeholder="Email Address" type="text" required /></div>
                    <div><input placeholder="Phone" type="text" required /></div>
                    <div><textarea placeholder="Your Message" required /></div>
                    <Link to="/">
                        <button>SUBMIT</button>
                    </Link>
                </form>
            </div>
            <div id="contactUsFeatures">
                <Features
                    imgSrc="./assets/shared/desktop/illustration-canada.svg"
                    heading="CANADA"
                    containsButton={true}
                />
                <Features
                    imgSrc="./assets/shared/desktop/illustration-australia.svg"
                    heading="AUSTRALIA"
                    containsButton={true}
                />
                <Features
                    imgSrc="./assets/shared/desktop/illustration-united-kingdom.svg"
                    heading="UNITED KINGDOM"
                    containsButton={true}
                />
            </div>
        </div >
    )
}