import React, { useState } from "react";
import ViewInMap from "./ViewInMap";


export default function Locations() {
    window.scrollTo(0, 0);
    const [width, setWidth] = useState(window.innerWidth);
    if (width > 992) {
        document.querySelector("#root").style = "height:1970px";
    }
    if (width <= 992) {
        document.querySelector("#root").style = "height:3050px";
    }
    if (width <= 540) {
        document.querySelector("#root").style = "height:3550px";
    }
    window.addEventListener("resize", () => { setWidth(window.innerWidth) });
    return (
        <div className="container">
            <ViewInMap
                country="Canada"
                nameOfOffice="Designo Central Office"
                addressOfOffice1="3886 Wellington Street"
                addressOfOffice2="Toronto, Ontario M9C 3J5"
                phoneNumber="P : +1 253-863-8967"
                email="M : contact@designo.co"
                shouldReverse={false}
                long="43.644"
                lat="-79.394"
            />
            <ViewInMap
                country="Australia"
                nameOfOffice="Designo AU Office"
                addressOfOffice1="19 Balonne Street"
                addressOfOffice2="New South Wales 2443"
                phoneNumber="P : (02) 6720 9092"
                email="M : contact@designo.au"
                shouldReverse={true}
                long="-31.253"
                lat="146.92"
            />
            <ViewInMap
                country="United Kingdom"
                nameOfOffice="Designo UK Office"
                addressOfOffice1="13 Colorado Way"
                addressOfOffice2="Rhyd-y-fro SA8 9GA"
                phoneNumber="P : 078 3115 1400"
                email="M : contact@designo.uk"
                shouldReverse={false}
                long="55.378"
                lat="-3.4360"
            />
        </div>
    )
}