import React from "react";
import './styles.css';
import cartLogo from '../../assets/img/cart_32.png';
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {

    const {cart} = useContext(Shop);

    const navigate = useNavigate();

    const goToCart = () => {
        navigate("/cart");
    }

    return(
        <div className="container-cart">
            <img onClick={goToCart} src={cartLogo} alt="cart-nav" className="img-cart-nav"></img>
            <div className="numbreItem">
                {cart.length}
            </div>
        </div>
        
    )
}

export default CartWidget;