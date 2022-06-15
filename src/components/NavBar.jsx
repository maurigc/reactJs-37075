import React from "react";
import './NavBar.css';
import logo from '../assets/img/logo_64.png';

const NavBar = () => {
    return(
        <div className="nav-bar">
            <img src={logo} alt="img-logo" className="img-logo"></img>
            <ul className="list-nav">
                <li className="item-input-nav">
                    <input className="input-nav" placeholder="Search..."/>
                </li>
                <li className="item-nav">
                    <a href="#">Home</a>
                </li>
                <li className="item-nav">
                    <a href="#">Products</a>
                </li>
                <li className="item-nav">
                    <a href="#">Contact</a>
                </li>
                <li className="item-nav">
                    <a href="#">About us</a>
                </li>

            </ul>
        </div>
    )
}

export default NavBar;