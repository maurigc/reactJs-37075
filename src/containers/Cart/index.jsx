import React from "react";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import "./styles.css";
import deleteLogo from "../../assets/img/deleteIcon_32.png"
import { useNavigate } from "react-router-dom";
import EmptyCart from "../../components/EmptyCart";

const Cart = () => {

    const {cart, removeAll, removeItem, totalCompra} = useContext(Shop);

    const navigate = useNavigate();

    // Funcion para volver a la pagina principal
    const goToMain = () => {
        navigate("/");
    }

    // Funcion para ir al formulario para finalizar la compra.
    const goToForm = () => {
        navigate("/Form")
    }


    return(
        <div className="mainCart-container">
        {cart.length !== 0 ?
            <div className="cart-container">
                {cart.map((producto) => {
                    return (
                        <div className="products-cart" key={producto.id}>
                            <img className="img-cart" alt="img-cart" src={producto.image}></img>
                            <h3>{producto.title}</h3>
                            <p>{producto.quantity}</p>
                            <p>${producto.price}</p>
                            <img className="img-delete" onClick={() => removeItem(producto.id, producto.price, producto.quantity)} src={deleteLogo} alt="img-delete"></img>
                        </div>
                    )
                })}
                <h1 className="total-cart">Total: ${totalCompra}</h1>
                <div className="btnCart-container">
                    <button className="btn-clearAll" onClick={() => removeAll()}>Eliminar productos</button>
                    <button onClick={goToForm} className="btn-finalizarCompra">Finalizar la compra</button>
                </div>
                     
            </div>
            :
            <EmptyCart goToMain={goToMain}/>
        }
        </div>
    )
}

export default Cart;