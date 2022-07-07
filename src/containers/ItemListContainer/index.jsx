import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../../components/ItemList/index.jsx";
import Loader from "../../components/Loader/index.jsx";
import './styles.css';
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
    
    const [products, setProducts] = useState(null);

    const params = useParams();

    useEffect(() => {
        const getProducts = async () => {
            try{
                const response = await fetch(`https://fakestoreapi.com/products/`);

                const data = await response.json();

                params.categoryId ? setProducts(data.filter(product => product.category === params.categoryId)) : setProducts(data);
            
            } catch (err){
                console.log(`Error: ${err}`);
            }
            
        }

        getProducts();

    }, [params])

    

    return(
        <div>
            {products ? <ItemList products={products}/> : <Loader/>}
        </div>
    )
}

export default ItemListContainer;
