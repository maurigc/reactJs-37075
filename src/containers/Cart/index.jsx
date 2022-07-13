import React from "react";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import "./styles.css";
import deleteLogo from "../../assets/img/deleteIcon_32.png"

const Cart = () => {

    const {cart, removeAll, removeItem} = useContext(Shop);


    return(
        <div>
            {cart.map((producto) => {
                return (
                    <div className="products-cart">
                        <h3>{producto.title}</h3>
                        <p>{producto.quantity}</p>
                        <p>{producto.price}</p>
                        <img className="img-delete" onClick={() => removeItem(producto.id)} src={deleteLogo} alt="img-delete"></img>
                    </div>
                )
            })}
            {cart.length !== 0 ? <button className="btn-clearAll" onClick={() => removeAll()}>Eliminar productos</button> : <h1>carrito vacio</h1>}
        </div>
    )
}

export default Cart;