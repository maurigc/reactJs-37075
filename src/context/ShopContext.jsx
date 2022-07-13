import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Shop = createContext();

const ShopProvider = ({children}) => {

    // Estado para guardar los productos agregados
    const [cart, setCart] = useState([]);

    const addProducts = (producto, cantidad) => {
        // Guardamos el producto repetido
        const repeatProduct = isInCart(producto);

        // Condicional en caso de que haya un producto repetido
        if(repeatProduct){
            repeatProduct.quantity += cantidad;
            setCart([...cart]);
        }else{
            setCart([...cart, {...producto, quantity: cantidad}])
        }
    
    }

    // Funcion para eliminar un Producto determinado
    const removeItem = (productoId) => {
    // Filter para crear un nuevo array sin el producto a eliminar
       const nuevoArray = cart.filter((el) => el.id !== productoId)
    // Seteamos el cart con el nuevo array
       setCart(nuevoArray);
    }

    // Funcion para eliminar todos los productos del carrito
    const removeAll = () => {
        setCart([]);
    }

    // Funcion para encontrar un producto repetido
    const isInCart = (producto) => {
        return cart.find((el) => el.id === producto.id);
    }

    return(
        <Shop.Provider value={{addProducts, cart, removeAll, removeItem}}>
            {children}
        </Shop.Provider>    
    )
}

export default ShopProvider;