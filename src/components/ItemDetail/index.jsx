import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Shop } from "../../context/ShopContext";
import ItemCount from "../ItemCount";
import "./styles.css";



const ItemDetail = ({product}) => {

    // Estado para guardar la cantidad de productos agregados
    const [qtyProductsAdded, setQtyProductsAdded] = useState(0);

    const navigate = useNavigate();

    // Usamos la funcion addProducts del contexto
    const {addProducts, total} = useContext(Shop);

    // Function to add products
    const addToCart = (qty) => {
        setQtyProductsAdded(qty);
    }

    // Funcion para terminar la compra y navegar al cart
    const handleTerminate = () => {
        addProducts(product, qtyProductsAdded);
        total(product,qtyProductsAdded);
        navigate("/cart");
    }

    return (
        <div className="contenedorDePrueba">
            <div className="container-detail">
                <img className="img-product" alt="img product" src={product.image}/>
                <div className="description-product">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <h2>${product.price}</h2>
                    {!qtyProductsAdded ? 
                        <div className="itemCount-container">
                            <ItemCount addToCart={addToCart} stock={product.stock} initial={1}/>
                        </div>
                        :
                        <button className="btn-terminate" onClick={handleTerminate}>Terminar compra</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;