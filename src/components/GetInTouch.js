import React from "react";
import "../sassFiles/GetInTouch.scss";
import { Link } from "react-router-dom";

export default function GetInTouch() {
    return (
        <div className="container" style={{ backgroundImage: "url(./assets/shared/desktop/bg-pattern-call-to-action.svg)" }} id="getInTouch">
            <div>
                <h2>Let’s talk about your project</h2>
                <div>Ready to take it to the next level? Contact us today and find out how
                    our expertise can help your business grow.
                </div>
            </div>
            <Link to="/Contact"><button>GET IN TOUCH</button></Link>
        </div>
    )
}