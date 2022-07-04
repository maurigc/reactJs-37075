import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList/index.jsx";
import './styles.css';



const ItemListContainer = () => {
    
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try{
                const response = await fetch("https://fakestoreapi.com/products");;

                const data = await response.json();

                setProducts(data);
            } catch (err){
                console.log(`Error: ${err}`);
            }
            
        }

        getProducts();

    }, [])

    

    return(
        // <div className="itemCount-container"> 
        //     <ItemCount addToCart={addToCart} stock={5} initial={1}/>
        // </div>
        <div>
            {products ? <ItemList products={products}/> : null}
        </div>
    )
}

export default ItemListContainer;
