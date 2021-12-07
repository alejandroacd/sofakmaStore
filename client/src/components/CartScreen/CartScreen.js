import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import '../CartScreen/CartScreen.css'
import CartItem from '../CartScreen/CartItem'
import { useCart } from '../../CartContext/cartContext'
import CheckoutBox from './CartBox';


const Cart = () => {
    const { cart, totalCheckout, totalPrice, loading} = useCart();

    useEffect(()=> {
        console.log(cart)
        totalPrice()
    },[totalCheckout,totalPrice])


    return (
        <>
            <Navbar />
            <div className="cart_items_space">
                <h1>Carrito</h1>1

                {loading ? <div class="load-3">
         
        
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>    
      </div> : cart.map((x) => {
                    return (
                        <CartItem index={cart.indexOf(x)} key={x.id} id={x.id} name={x.name} image={x.image} price={x.price} qty={x.qty} />
                    )
                })}
                <CheckoutBox total={totalCheckout} />

            </div>

        </>
    )
}
  
export default Cart
