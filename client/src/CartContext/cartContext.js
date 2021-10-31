import React, {useContext, useState, createContext} from "react";


const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = ({children}) => {

   let cart = JSON.parse(localStorage.getItem('cart')) || [];
   const [totalCheckout, setTotalCheckout] = useState(cart.length > 0 ? cart
    .map(x => x.price * x.qty)
    .reduce((x,y) => x + y )
    : 0)


    // cart controllers
    

    const totalPrice = () => {
        return setTotalCheckout(cart.length > 0 ? cart
            .map(x => x.price * x.qty)
            .reduce((x,y) => x + y )
            : 0)
       }
    
    
    //Añadir al carrito
    const addToCart = (item) => {
         let exist = cart.find(x => x.id === item.id)
        let index = cart.findIndex((elem,indice)=> {
            if(elem.id === item.id) {
                return true;
            }

            return indice;
        })        
         if(exist === undefined) {
             cart.push({...item,qty: 1})
         }
         else {
             cart[index].qty = cart[index].qty + 1
         }
         
        localStorage.setItem('cart',JSON.stringify(cart))
    }


// sumar otra unidad 
    const qtyPlus = (item) => {
     let index = cart.findIndex((elem,indice) => {
         if(elem.id === item.id){
             return true
         }

         
     })
     cart[index].qty = cart[index].qty + 1
     localStorage.setItem('cart',JSON.stringify(cart))
    }
    
// restar una unidad 

const qtyMinus = (item) => {
    let index = cart.findIndex((elem,indice) => {
        if(elem.id === item.id){
            return true
        }
      
    })

    cart[index].qty = cart[index].qty - 1
    localStorage.setItem('cart',JSON.stringify(cart))
   }
   

   // Cálculo del TotalCheckout 



    const removeFromCart = (id) => {
        const newCart = cart.filter(x => 
            x._id !== id
        )

        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    const resetCart = () => {
        localStorage.clear();
    }




    const value = {
        addToCart,
        removeFromCart,
        resetCart,
        cart,
        qtyPlus,
        qtyMinus,
        totalPrice,
        totalCheckout

     
    }

    return (
        <CartContext.Provider value={value} >

            {children}
        </CartContext.Provider>
    )
}