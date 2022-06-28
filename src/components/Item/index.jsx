import React from "react";
import "./styles.css";

const Item = ({product}) => {

    return(
        <div className="cotainer-product">
            <h5 className="title-product">{product.title}</h5>
            <img src={product.image} alt="img-product" className="catalog-img"></img>
            <button className="btn-product">More details</button>
        </div>
    )
}

export default Item;