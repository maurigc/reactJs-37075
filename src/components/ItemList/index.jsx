import React from "react";
import Item from "../Item";
import "./styles.css";


const ItemList = ({products}) => {
    
    return(
        <div className="container-item">
            {products.map(product => {
                return <Item product={product}/>
            })}
        </div>    
    )
}

export default ItemList;