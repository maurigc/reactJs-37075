import React, { useState } from "react";
import './styles.css';

const ItemCount = ({stock, initial, addToCart}) => {

    const [countProducts, setCountProducts] = useState(initial);
    
    // Select specific amount of products to add
    const onAdd = () => {
        countProducts >= stock ? setCountProducts(stock) : setCountProducts(countProducts + 1);
    }

    
    // Select specific amount of products to remove
    const onRemove = () => {
        countProducts === initial ? setCountProducts(initial) : setCountProducts(countProducts - 1);   
    }

    return(
        <div className="container-count">
            <h3 className="tittle-count">Cantidad de productos:</h3>
            <div className="container-btn-count">
                <button onClick={onRemove} className="btn-count">-</button>
                <p className="p-count">{countProducts}</p>
                <button onClick={onAdd} className="btn-count">+</button>
            </div>
            <button onClick={addToCart} className="addToCart-button">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;