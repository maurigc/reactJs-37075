import React from "react";
import './styles.css';
import cartLogo from '../assets/img/cart_32.png';

const CartWidget = () => {

    return(
        <img src={cartLogo} alt="cart-nav" className="img-cart-nav"></img>
    )
}

export default CartWidget;