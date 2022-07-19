import React from "react";
import "./styles.css";

const EmptyCart = ({goToMain}) => {

    return(
        <div className="emptyCart-container">
            <div className="emptyCart">
                <h2>El carrito está vacío</h2>
                <p>¿No sabes que comprar? Vuelve al inicio, ¡te esperan miles de productos!</p>
                <button className="btn-backToMain" onClick={goToMain}>Volver al inicio</button>
            </div>
        </div>
    )
}

export default EmptyCart;