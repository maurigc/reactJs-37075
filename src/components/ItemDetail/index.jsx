import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import ItemCount from "../ItemCount";
import "./styles.css";



const ItemDetail = ({product}) => {

    const [qtyProductsAdded, setQtyProductsAdded] = useState(0);

    const navigate = useNavigate();

    // Function to add products
    const addToCart = (qty) => {
        // countProducts === 1 ? alert("Se agrego 1 producto al carrito") : alert(`${countProducts} productos se agregaron al carrito`);
        setQtyProductsAdded(qty);
    }

    const handleTerminate = () => {
        navigate("/cart");
    }

    return (
        <div className="container-detail">
            <img className="img-product" alt="img product" src={product.image}/>
            <div className="description-product">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h2>${product.price}</h2>
                {!qtyProductsAdded ? 
                    <div className="itemCount-container">
                        <ItemCount addToCart={addToCart} stock={5} initial={1}/>
                    </div>
                    :
                    <button className="btn-terminate" onClick={() => handleTerminate()}>Terminar compra</button>}
            </div>
        </div>
    )
}

export default ItemDetail;