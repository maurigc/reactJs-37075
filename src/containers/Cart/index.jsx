import React from "react";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import "./styles.css";
import deleteLogo from "../../assets/img/deleteIcon_32.png"
import { useNavigate } from "react-router-dom";
import EmptyCart from "../../components/EmptyCart";
import generarOrden from "../../firebase/generarOrden.js";

const Cart = () => {

    const {cart, removeAll, removeItem, totalCompra} = useContext(Shop);

    const navigate = useNavigate();

    // Funcion para volver a la pagina principal
    const goToMain = () => {
        navigate("/");
    }

    const finalizarCompra = async () => {
        // Objeto para guardar la orden que se genere
        const order = {
            buyer:{
                name: "mauricio Garcia",
                adress: "Alfonsina Storni 1067",
                email: "mauricioogarcia1067@gmail.com"
            },
            item: cart,
            total: totalCompra
        }

        // Ejecutamos funcion para generar la orden
        generarOrden(cart, order);

        // Removemos todo los items del carrito
        removeAll();
    }

    return(
        <div className="mainCart-container">
        {cart.length !== 0 ?
            <div className="cart-container">
                {cart.map((producto) => {
                    return (
                        <div className="products-cart">
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
                    <button onClick={finalizarCompra} className="btn-finalizarCompra">Finalizar la compra</button>
                </div>
                     
            </div>
            :
            <EmptyCart goToMain={goToMain}/>
        }
        </div>
    )
}

export default Cart;