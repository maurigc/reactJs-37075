import React from "react";
import "./styles.css";
import searchLogo from "../../assets/img/search_16.png";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";                

const Input = () => {

    const navigate = useNavigate();

    const {todosProductos} = useContext(Shop);

    const listaBuscados = document.getElementById("listaBuscados");
    
    const handleSearch = (e) => {

        listaBuscados.innerText = "";

        const productosBuscados = todosProductos.filter(producto => {
            return producto.title.toLowerCase().includes(e.target.value.toLowerCase());
        })

        productosBuscados.forEach(element => {

            let li1 = document.createElement("li");
            li1.innerText = element.title;
            li1.className = "listaBuscados";
            li1.id = element.id;
            li1.addEventListener("click", goToDetail);

            listaBuscados.append(li1)
        });
        
        if(e.target.value === ""){
            listaBuscados.innerText = "";
        }    
    }

    const goToDetail = (e) => {
        navigate(`/detail/${e.target.id}`);
        listaBuscados.innerText = "";
    }    

    return(
        <div>
            <img src={searchLogo} alt="searchLogo" className="img-input"></img>
            <input onChange={handleSearch} className="input-nav" placeholder="Search..."/>
            <div className="container-listaBuscados">
                <ul id="listaBuscados">

                </ul>
            </div>        
            
                
        </div>

    )
}

export default Input;