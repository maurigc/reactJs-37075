import React from "react";
import "./styles.css";
import Load from "../../assets/img/loading_64.png";

const Loader = () => {

    return(
        <div className="container-loader">
            <img src={Load} className="loader" alt="img loader"/>
        </div>
    )
}

export default Loader;