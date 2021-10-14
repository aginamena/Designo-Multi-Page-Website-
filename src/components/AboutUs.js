import React, { useState } from "react";
import "../sassFiles/AboutUs.scss";
import AboutUsContent from "./AboutUsContent";
import Features from "./Features";

export default function AboutUs() {
    window.scrollTo(0, 0);
    const [width, setWidth] = useState(window.innerWidth);
    if (width > 992) {
        document.querySelector("#root").style = "height:3532px";
    }
    if (width <= 992) {
        document.querySelector("#root").style = "height:4680px";
    }
    if (width <= 540) {
        document.querySelector("#root").style = "height:5482px";
    }
    window.addEventListener("resize", () => { setWidth(window.innerWidth) });
    return (
        <div id="aboutUs">
            <div id="aboutUsHeading" className="container"
                style={{ backgroundImage: "url(./assets/home/desktop/bg-pattern-hero-home.svg)" }}
            >
                <div id="aboutUsIntro" className="container">
                    <h1>About Us</h1>
                    <div>
                        Founded in 2010, we are a creative agency that produces lasting results
                        for our clients. We’ve partnered with many startups, corporations, and nonprofits
                        alike to craft designs that make real impact. We’re always looking forward to
                        creating brands, products, and digital experiences that connect with our clients’
                        audiences.
                    </div>
                </div>
                <img src=
                    {width > 992 ? "./assets/about/desktop/image-about-hero.jpg"
                        : width <= 540 ? "./assets/about/mobile/image-about-hero.jpg" :
                            "./assets/about/tablet/image-about-hero.jpg"}
                    id="aboutHeadingImg"
                />
            </div>
            <AboutUsContent
                imgSrc=
                {width > 992 ? "./assets/about/desktop/image-world-class-talent.jpg" :
                    width <= 540 ? "./assets/about/mobile/image-world-class-talent.jpg" :
                        "./assets/about/tablet/image-world-class-talent.jpg"}
                heading="World-class talent"
                description1="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
                description2="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
                shouldReverse={false}
            />
            <div id="aboutUsFeatures" className="container">
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
            <AboutUsContent
                imgSrc=
                {width > 992 ? "./assets/about/desktop/image-real-deal.jpg" :
                    width <= 540 ? "./assets/about/mobile/image-real-deal.jpg" :
                        "./assets/about/tablet/image-real-deal.jpg"}
                heading="The real deal"
                description1="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
                description2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
                shouldReverse={true}
            />
        </div>
    )
}