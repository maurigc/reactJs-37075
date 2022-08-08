import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import "./styles.css";
import Loader from "../../components/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {

    // Estado para los productos
    const [productDetail, setProductDetail] = useState(null);

    const params = useParams();

    useEffect(() => {

        const getProducts = async () => {
            try {
                const docRef = doc(db, "products", params.detailId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const productDetail = {id: docSnap.id, ...docSnap.data()}

                    setProductDetail(productDetail);

                } else {
                
                console.log("No such document!");
                }

            } catch (error) {
                alert(`Error: ${error}`);
            }
        }

        getProducts();
    }, [params])


    return(
        <div>
            {/* Si el producto no esta seteado se monta un loader */}
            {productDetail ? <ItemDetail product={productDetail}/> : <Loader/>}
        </div>
    )
}

export default ItemDetailContainer;