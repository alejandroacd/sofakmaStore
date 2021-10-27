import React, { useState, useEffect } from "react";
import '../CartScreen/CartScreen.css'
import { useCart } from '../../CartContext/cartContext'



const CartItem = (props) => {



    let [value, setValue] = useState(props.qty)
    const { qtyPlus, qtyMinus } = useCart()
    let switche = value > 1 ? true : false


    const upQty = () => {
        document.querySelectorAll("input")[props.index].value++;
        setValue(value + 1)
        qtyPlus(props)
    
    }

    const downQty = () => {
        document.querySelectorAll("input")[props.index].value--;
        setValue(value - 1)
        qtyMinus(props);
        
    }


    return (
        <>
            <div className="cart_item_box">
                <div className='image_cart_div'>
                    <img alt="logo" src={props.image} />
                </div>

                <div className='cart_info_div'>
                    <h1> {props.name}</h1>
                    <p> ${props.price} </p>
                    <div className='qty_selector'>
                        <button onClick={downQty} className={switche ? 'show' : 'hide'}> - </button>
                        <input id="input" min={0} defaultValue={value} />
                        <button onClick={upQty} > + </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CartItem;