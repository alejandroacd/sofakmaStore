import React from 'react';
import axios from 'axios';
import { useCart } from '../../CartContext/cartContext'





const CheckoutBox = (props) => {

    const { cart,loadin } = useCart();

  
    const enviarData = () => {
       loadin()
        axios.post('https://sofakma-store.onrender.com/checkout', 
            [...cart])  
            .then(function (response) {
                console.log(response)
                
              })
              .catch(function (error) {
                console.log(error);
              });
              window.location = "https://sofakma-store.onrender.com/checkout"

    }
    return (    
        <div className="checkout_box">
            <h1>Total: {props.total}  </h1>
            <button onClick={enviarData}> Pagar </button>
            
        </div>
    )
}

export default CheckoutBox;