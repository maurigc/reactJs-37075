import React from "react";
import ItemCount from "../../components/ItemCount";
import './styles.css';

const ItemListContainer = () => {
    
    const addToCart = () => {
        console.log("productos agregado con éxito");
    }

    return(
        <div className="itemCount-container">
            <ItemCount addToCart={addToCart} stock={5} initial={1}/>
        </div>
    )
}

export default ItemListContainer;
