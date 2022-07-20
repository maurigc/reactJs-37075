import React from "react";
import Input from '../Input';
import CartWidget from "../CartWidget";
import './styles.css';
import logo from '../../assets/img/logo_64.png';
import { useNavigate, Link } from "react-router-dom";


const NavBar = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }

    return(
        <div className="nav-bar">
            <img src={logo} onClick={goToHome} alt="img-logo" className="img-logo"></img>
            <ul className="list-nav">
                <li>
                    <Input/>
                </li>
                <li className="item-nav">
                    <Link to="/">Home</Link>
                </li>
                <li className="item-nav">
                    <Link to="/category/laptops">Laptops</Link>
                </li>
                <li className="item-nav">
                    <Link to="/category/monitores">Monitores</Link>
                </li>
                <li className="item-nav">
                    <Link to="/category/placas">Placas de video</Link>
                </li>
                <li className="item-nav">
                    <Link to="/category/micros">Micros</Link>
                </li>              
            </ul>
            <div className="cart-nav">
                <CartWidget/>
            </div>
            
        </div>
    )
}

export default NavBar;