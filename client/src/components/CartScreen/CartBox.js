import React from 'react';



const CheckoutBox = (props) => {

    return (
        <div className="checkout_box">
            <h1>Total: {props.total}  </h1>
        </div>
    )
}

export default CheckoutBox;