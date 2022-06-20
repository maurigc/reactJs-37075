import React from "react";
import "./styles.css";
import searchLogo from "../assets/img/search_16.png";

const Input = () => {
    return(
        <div>
            <img src={searchLogo} alt="searchLogo" className="img-input"></img>
            <input className="input-nav" placeholder="Search..."/>
        </div>

    )
}

export default Input;