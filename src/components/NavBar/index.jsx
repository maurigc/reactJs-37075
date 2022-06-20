import React from "react";
import Input from '../Input';
import CartWidget from "../CartWidget";
import './styles.css';
import logo from '../assets/img/logo_64.png';


const NavBar = () => {
    return(
        <div className="nav-bar">
            <img src={logo} alt="img-logo" className="img-logo"></img>
            <ul className="list-nav">
                <li>
                    <Input/>
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
            <div className="cart-nav">
                <CartWidget/>
            </div>
            
        </div>
    )
}

export default NavBar;