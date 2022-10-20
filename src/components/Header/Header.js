import React from "react";
import logo from "../../assets/logo.jpeg"
import "./Header.css"

const Header = () => {
    return (
        <header>
            <img className="logoHeader" src={logo} alt="" />
        </header>
    )
}

export default Header;