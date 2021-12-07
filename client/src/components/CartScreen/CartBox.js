import React, {useEffect} from 'react';
import axios from 'axios';
import { useCart } from '../../CartContext/cartContext'





const CheckoutBox = (props) => {

    const { cart,loadin } = useCart();

  
    const enviarData = () => {
       loadin()
        axios.post('http://localhost:3001/checkout', 
            [...cart])  
            .then(function (response) {
                console.log(response)
                
              })
              .catch(function (error) {
                console.log(error);
              });
              window.location = "http://localhost:3001/checkout"

    }
    return (    
        <div className="checkout_box">
            <h1>Total: {props.total}  </h1>
            <button onClick={enviarData}> Pagar </button>
            
        </div>
    )
}

export default CheckoutBox;