import React from 'react';
import movieFinderLogo from "../../utils/images/movieFinderLogoImage.png"
import {Link} from "react-router-dom";

import "./logo.css";

const Logo = () => {
    return (
        <Link className="logoLink" to="/">
            <div className="logo">
                <img src={movieFinderLogo} alt="logo"/>
            </div>
        </Link>
    );
};

export default Logo;