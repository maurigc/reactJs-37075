import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Item = ({product}) => {

    const navigate = useNavigate();

    const handleDetail = () => {
        navigate(`/detail/${product.id}`);
    }

    return(
        <div className="cotainer-product">
            <div className="container-img">
                <img src={product.image} alt="img-product" className="catalog-img"></img>   
            </div>     
            <h1 className="title-product">{product.title}</h1>
            <div className="priceButton-container">
                <h2>${product.price}</h2>
                <button className="btn-product" onClick={handleDetail}>More details</button>
            </div>
            
            <p className="stock"><strong>Stock:</strong> {product.stock}</p>
            
            
        </div>
    )
}

export default Item;