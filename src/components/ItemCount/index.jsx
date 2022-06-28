import React, { useState } from "react";
import './styles.css';

const ItemCount = ({stock, initial, addToCart}) => {

    const [countProducts, setCountProducts] = useState(initial);

    // Function to select a specifit amount of products.
    const addProducts = (num) => {
        setCountProducts(countProducts + num);
    }

    return(
        <div className="container-count">
            <h3 className="tittle-count">Cantidad de productos:</h3>
            <div className="container-btn-count">
                <button onClick={() => addProducts(-1)} className="btn-count" disabled={countProducts === initial ? true : null}>-</button>
                <p className="p-count">{countProducts}</p>
                <button onClick={() => addProducts(1)} className="btn-count" disabled={countProducts === stock ? true : null}>+</button>
            </div>
            <button onClick={() =>addToCart(countProducts)} className="addToCart-button">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;