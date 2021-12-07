import React, { useState } from "react";
import '../CartScreen/CartScreen.css'
import { useCart } from '../../CartContext/cartContext'
import { MdDeleteForever } from 'react-icons/md'




const CartItem = (props) => {

    let [value, setValue] = useState(props.qty)
    const { qtyPlus, qtyMinus, totalPrice, removeFromCart, calculateItems } = useCart()
    let switche = value > 1 ? true : false

    const upQty = () => {
        qtyPlus(props)
        document.querySelectorAll("input")[props.index].value++;
        setValue(value + 1)
        totalPrice()
        calculateItems()
    }

    const downQty = () => {
        qtyMinus(props);
        document.querySelectorAll("input")[props.index].value--;
        setValue(value - 1)
        totalPrice()
        calculateItems()
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
                        <div className="delete-div">
                        <MdDeleteForever size={20} id="delete_item" onClick={() => { removeFromCart(props.id) }} />
                        </div>
                        <button type="button" onClick={downQty} className={switche ? 'showy' : 'hidden'}> - </button>
                        <input id="input" min={0} defaultValue={value} />
                        <button type="button " onClick={upQty} > + </button>


                    </div>

                </div>

            </div>


        </>
    )
}

export default CartItem;