import React from "react";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import "./styles.css";
import generarOrden from "../../firebase/generarOrden";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const Form = () => {

    const navigate = useNavigate();

    const {cart, removeAll, totalCompra} = useContext(Shop);

    // Estados para guardar los errores en los inputs.
    const [errorName, setErrorName] = useState(false);
    const [errorMail, setErrorMail] = useState(false);
    const [errorAdress, setErrorAdress] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    

    const finalizarCompra = async (e) => {
        e.preventDefault();

        const inputName = document.getElementById("name");
        const inputMail = document.getElementById("mail");
        const inputAdress = document.getElementById("adress");
        const inputPhone = document.getElementById("phone");

        // Objeto para guardar la orden que se genere
        const order = {
            buyer:{
                name: inputName.value,
                adress: inputAdress.value,
                email: inputMail.value,
                phone: inputPhone.value
            },
            item: cart,
            total: totalCompra
        }


        // Condicional para corroborar que esten todos los datos del form antes de generar la orden.
        if(errorName || errorMail || errorAdress || errorPhone){ 
            Swal.fire({
                icon: 'error',
                title: 'Hubo un problema!',
                text:  'Corrobora los datos ingresados en el formulario.'
              })
        }else if(inputName.value === "" || inputMail.value === "" || inputAdress.value === "" || inputPhone.value === ""){   
            Swal.fire({
                icon: 'error',
                title: 'Hubo un problema!',
                text:  'Corrobora los datos ingresados en el formulario.'
              })
        }else{
            
            // Ejecutamos funcion para generar la orden
            generarOrden(cart, order);

            // Removemos todo los items del carrito
            removeAll();

        }

        navigate("/");
    }


// Funcion para validar lo ingresado en los input del formulario.

    const handleValidateInput = (e) => {
        if(e.target.name === "name"){
            if(e.target.value <= 5){
                e.target.className = "inputForm error";
                setErrorName(true);
            }else if(!e.target.value.includes(" ")){
                e.target.className = "inputForm error";
                setErrorName(true);
            }else{
                e.target.className = "inputForm";
                setErrorName(false);
            }
        }else if(e.target.name === "mail"){
            if(!e.target.value.includes("@" && ".")){
                e.target.className = "inputForm error";
                setErrorMail(true);
            }else if(e.target.value.length <= 5){
                e.target.className = "inputForm error";
                setErrorMail(true);
            }else{
                e.target.className = "inputForm"
                setErrorMail(false);
            }
        }else if(e.target.name === "adress"){
            if(e.target.value.length <= 5){
                e.target.className = "inputForm error";
                setErrorAdress(true);
            }else{
                e.target.className = "inputForm";
                setErrorAdress(false);
            }
        } else if(e.target.name === "phone"){
            if(e.target.value.length <= 5){
                e.target.className = "inputForm error";
                setErrorPhone(true);
            }else if(!parseInt(e.target.value)){
                e.target.className = "inputForm error";
                setErrorPhone(true);
            }else{
                e.target.className = "inputForm";
                setErrorPhone(false);
            }
        }
    }

    return(
        <>
            <div>
                {cart.map((producto) => {
                    return (
                        <div className="container-buyProducts" key={producto.id}>
                            <img src={producto.image} alt="imageProduct" className="imagenProducto"></img>
                            <h3>{producto.title}</h3>
                            <h3>{producto.quantity}</h3>
                        </div>
                    )
                })}
            </div>
            <div className="container-form">
                <form className="form" id="form">
                    <h3 className="tituloForm">Completa el formulario para finalizar la compra!</h3>
                    
                    <input className="inputForm" id="name" placeholder="Nombre" name="name" onChange={handleValidateInput} ></input>
                    {errorName && <p className="error-p">Debe contener solo letras y minimo un espacio.</p>}

                    <input className="inputForm" id="mail" placeholder="Mail" name="mail" onChange={handleValidateInput}></input>
                    {errorMail && <p className="error-p">Debe contener un mail valido.</p>}

                    <input className="inputForm" id="adress" placeholder="Adress" name="adress" onChange={handleValidateInput}></input>
                    {errorAdress && <p className="error-p">Debe contener una direccion valida.</p>}

                    <input className="inputForm" id="phone" placeholder="000-0000000" name="phone" onChange={handleValidateInput}></input>
                    {errorPhone && <p className="error-p">Debe contener solo numeros.</p>}
                    <button onClick={finalizarCompra} type="submit" className="finalizarCompra">Finalizar compra</button>
                </form>
            </div>
        </>
    )
}

export default Form;