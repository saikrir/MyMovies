import { NavLink } from 'react-router-dom';
import React from 'react';
const Navigation = props =>
    <nav className={["navbar", "navbar-expand-lg", "navbar-light", "bg-light"].join(" ")}>
        <div className={["col-md-12", "navbar-collapse"].join(" ")} id="navBar">
            <div className="navbar-nav">
                <NavLink className={["nav-item", "nav-link", "active"].join(" ")} to="/">Home</NavLink>
                <NavLink className={["nav-item", "nav-link", "active"].join(" ")} to="/Details">Details</NavLink>
            </div>
        </div>
    </nav>

export default Navigation;