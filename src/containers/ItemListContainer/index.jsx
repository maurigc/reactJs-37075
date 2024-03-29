import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../../components/ItemList/index.jsx";
import Loader from "../../components/Loader/index.jsx";
import './styles.css';
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config.js"
import { useContext } from "react";
import { Shop } from "../../context/ShopContext.jsx";



const ItemListContainer = () => {    

    const {setTodosProductos} = useContext(Shop);
    
    const [products, setProducts] = useState(null);

    const params = useParams();

    useEffect(() => {
        const getProducts = async () => {
            try{
                const q = query(collection(db, "products"));

                const querySnapshot = await getDocs(q);
                
                const allProducts = [];

                querySnapshot.forEach((doc) => {
                    allProducts.push({id:doc.id, ...doc.data()})
                });
                
                params.categoryId ? setProducts(allProducts.filter(product => product.category === params.categoryId)) : setProducts(allProducts);
                
                setTodosProductos(allProducts);
            } catch (err){
                alert(`Error: ${err}`);
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
