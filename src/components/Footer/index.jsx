import React from "react";
import "./styles.css";
import Logo from "../../assets/img/logo_64.png";


const Footer = () => {

    return(
        <>
            <div className="footer">
                <div className="containerImg">
                    <img src={Logo} alt="logo-footer"></img>
                </div>
                <div className="containerLinks">
                    <h3>Contáctanos</h3>
                    <h3>Nosotros</h3>
                    <h3>Productos</h3>
                </div>
                <div className="containerInfo">
                    <h3>Atencion al cliente</h3>
                    <p>fireapp@mail.com</p>
                    <p>0800-333-3473</p>
                    <p>351-9456905</p>
                </div> 
            </div>
        </>
    )
}

export default Footer;