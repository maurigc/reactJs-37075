import {addDoc, collection, getDoc, writeBatch, doc } from "firebase/firestore"
import { db } from "./config";
import Swal from 'sweetalert2';


const generarOrden = (cart, order) => {
    const batch = writeBatch(db);

    const outOfStock = [];

    if(outOfStock.length === 0 ) {
        addDoc(collection(db, "orders"), order)
        .then(({id}) => {
            batch.commit().then(() => {
                Swal.fire({
                    icon: 'success',
                    toast: true,
                    title: 'Tu compra se realizó con éxito.',
                    html: `<strong>Código compra:</strong> ${id}`,
                    showConfirmButton: false,
                    position: 'top-end',
                    timer: '3000'
                  })
            })
        }).catch((err) => {
            alert(err);
        })
    }else{
        alert("error");
    }

    cart.forEach( (productoEnCart) => {
        getDoc(doc(db, "products", productoEnCart.id))
        .then( async (docSnap) => {
            const producto = {...docSnap.data(), id: docSnap.id};
            
            if(producto.stock >= productoEnCart.quantity){
                batch.update(doc(db, "products", producto.id), {
                    stock: producto.stock - productoEnCart.quantity
                })
            }else{
                outOfStock.push(producto);
            }
           
        })
        
        
    });
}

export default generarOrden;