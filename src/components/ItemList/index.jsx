import React from "react";
import { useEffect } from "react";
import Item from "../Item";
import "./styles.css";


const ItemList = ({products}) => {


    useEffect(() => {
        let divContenedor = document.getElementById("container-item");

        products.length <= 5 ? divContenedor.className = "container-item heigth" : divContenedor.className = "container-item";

    }, [products])
    
    

    return(
        <>
            <div id="container-item" className="container-item">
                {products.map(product => {
                    return <Item key={product.id} product={product}/>
                })}
            </div>
        </>
           
    )
}

export default ItemList;