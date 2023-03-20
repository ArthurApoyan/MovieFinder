import React from 'react';
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";


import "./header.css";
import GoBackButton from "../GoBackButton/GoBackButton";
import SearchPanel from "../SearchPanel/SearchPanel";

const Header = () => {
    return (
        <div className="header">
            <GoBackButton/>
            <Logo/>
            <NavMenu/>
            <SearchPanel/>
        </div>
    );
};

export default Header;