import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'

function Nav({ dogs }) {
    const links = dogs.map(dog => (
        <nav>
            <NavLink to={`/dogs/${dog.name.toLowerCase()}`}>
                {dog.name}
            </NavLink>
        </nav>
    ));

    return (
        <nav>
            <NavLink exact to="/dogs">Home</NavLink>
            {links}
        </nav>
    )
}


export default Nav;
