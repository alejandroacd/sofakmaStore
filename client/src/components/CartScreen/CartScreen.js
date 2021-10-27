import React, { useEffect } from 'react';
import Navbar  from '../Navbar/Navbar';
import '../CartScreen/CartScreen.css'
import  CartItem from '../CartScreen/CartItem'
import { useCart } from '../../CartContext/cartContext'
import CheckoutBox from './CartBox';


const Cart = () => {


    
    const { cart } = useCart();
    
    let totalCheckout = cart.length > 0 ? cart
    .map(x => x.price)
    .reduce((x,y) => x + y )
    : 0

    console.log(cart)

    return (
        <>  
        <Navbar />
        <div className="cart_items_space">
        <h1>Carrito</h1>

        {cart.map((x) => {
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