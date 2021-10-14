import React from "react";
import "../sassFiles/Navigation.scss";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-sm container" id="navigation">
            <Link to="/"><img src="./assets/shared/desktop/logo-dark.png" className="navbar-brand" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/AboutUs"><div className="nav-item nav-link">OUR COMPANY</div></Link>
                    <Link to="/Location"><div className="nav-item nav-link">LOCATIONS</div></Link>
                    <Link to="/Contact"><div className="nav-item nav-link">CONTACT</div></Link>
                </div>
            </div>
        </nav>
    )
}