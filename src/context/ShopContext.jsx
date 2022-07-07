import React, { Children } from "react";
import { useState } from "react";
import { createContext } from "react";

export const Shop = createContext();

const ShopProvider = () => {

    const [estadoA, setEstadoA] = useState("valor por defecto");

    return(
        <Shop.Provider value={{estadoA, setEstadoA}}>
            {Children}
        </Shop.Provider>    
    )
}

export default ShopProvider;