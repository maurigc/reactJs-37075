import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [todosProductos, setTodosProductos] = useState([]);

    // Estado para guardar los productos agregados
    const [cart, setCart] = useState([]);

    // Estado para el total de la compra
    const [totalCompra, setTotalCompra] = useState(0);

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

    // Funcion para obtener el total de la compra
    const total = (producto, cantidad) => {
        if(totalCompra === 0){
            const totalProductos = producto.price * cantidad;
            setTotalCompra(totalProductos);
        }else{
            setTotalCompra(totalCompra + producto.price * cantidad);
        }
        
    }

    // Funcion para eliminar un Producto determinado
    const removeItem = (productoId, productoPrice, productoQuantity) => {
        // Filter para crear un nuevo array sin el producto a eliminar
       const nuevoArray = cart.filter((el) => el.id !== productoId)
        // Seteamos el cart con el nuevo array
       setCart(nuevoArray);
        // Seteamos el total de la compra restandole el precio del producto eliminado por la cantidad.   
       setTotalCompra(totalCompra - productoPrice * productoQuantity);
    }

    // Funcion para eliminar todos los productos del carrito
    const removeAll = () => {
        setCart([]);
        setTotalCompra(0);
    }

    // Funcion para encontrar un producto repetido
    const isInCart = (producto) => {
        return cart.find((el) => el.id === producto.id);
    }

    return(
        <Shop.Provider value={{addProducts, cart, removeAll, removeItem, total, totalCompra, todosProductos, setTodosProductos}}>
            {children}
        </Shop.Provider>    
    )
}

export default ShopProvider;