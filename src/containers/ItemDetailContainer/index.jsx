import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import "./styles.css";
import Loader from "../../components/Loader";


const ItemDetailContainer = () => {

    // Estado para los productos
    const [productDetail, setProductDetail] = useState(null);

    const params = useParams();

    useEffect(() => {

        const getProducts = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${params.detailId}`);
            
                const data = await response.json();

                setProductDetail(data);
            } catch (error) {
                alert(error);
            }
        }

        getProducts();
    }, [params])

    // Function to add products
    const addToCart = (countProducts) => {
        countProducts === 1 ? alert("Se agrego 1 producto al carrito") : alert(`${countProducts} productos se agregaron al carrito`);
    }

    return(
        <div>
            {/* Si el producto no esta seteado se monta un loader */}
            {productDetail ? <ItemDetail product={productDetail} addToCart={addToCart}/> : <Loader/>}
        </div>
    )
}

export default ItemDetailContainer;