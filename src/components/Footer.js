import React from "react";
import "../sassFiles/Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div id="footer">
            <div className="container" id="footerFirst">
                <Link to="/"><img src="./assets/shared/desktop/logo-light.png" id="logo-night" /></Link>
                <div id="footerLoc">
                    <Link to='/AboutUs'><span>OUR COMPANY</span></Link>
                    <Link to="/Location"><span>LOCATIONS</span></Link>
                    <Link to="/Contact"><span>CONTACT</span></Link>
                </div>
            </div>
            <div className="container">
                <div>
                    Designo Central Office <br />
                    3886 Wellington Street <br />
                    Toronto, Ontario M9C 3J5
                </div>
                <div>
                    Contact Us (Central Office) <br />
                    P : +1 253-863-8967 <br />
                    M : contact@designo.co
                </div>
                <div id="social-links">
                    <img src="./assets/shared/desktop/icon-facebook.svg" />
                    <img src="./assets/shared/desktop/icon-youtube.svg" />
                    <img src="./assets/shared/desktop/icon-twitter.svg" />
                    <img src="./assets/shared/desktop/icon-pinterest.svg" />
                    <img src="./assets/shared/desktop/icon-instagram.svg" />
                </div>
            </div>
        </div>
    )
}