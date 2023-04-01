import React from 'react';
import {NavLink} from "react-router-dom";

import "./navMenu.css";

const NavMenu = () => {
    return (
        <div className="navMenu">
           <ul>
                <li><NavLink className="navMenuLink" to="/popular">Popular</NavLink></li>
                <li><NavLink className="navMenuLink" to="/topRated">Top Rated</NavLink></li>
                <li><NavLink className="navMenuLink" to="/upcoming">Upcoming</NavLink></li>
                <li><NavLink className="navMenuLink" to="/trending">Trending</NavLink></li>
           </ul>
        </div>
    );
};

export default NavMenu;