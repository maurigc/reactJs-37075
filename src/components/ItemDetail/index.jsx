import React from "react";
import ItemCount from "../ItemCount";
import "./styles.css";



const ItemDetail = ({product, addToCart}) => {

    return (
        <div className="container-detail">
            <img className="img-product" alt="img product" src={product.image}/>
            <div className="description-product">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h2>${product.price}</h2>
                <div className="itemCount-container">
                    <ItemCount addToCart={addToCart} stock={5} initial={1}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;