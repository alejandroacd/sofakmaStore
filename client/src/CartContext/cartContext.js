import React, {useContext,useState, createContext} from "react";



const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = ({children}) => {

    const [loading,setLoading] = useState(false)
    const [cart,setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []) 
    const [totalCheckout, setTotalCheckout] = useState(cart.length > 0 ? cart
    .map(x => x.price * x.qty)
    .reduce((x,y) => x + y )
    : 0)
    const [totalQty,setTotalQty] = useState(cart.length > 0 ? cart
        .map(x => x.qty)
        .reduce((x,y) => x + y) : 0)

// mejorar esta funcion     
const calculateItems = () => {
    setTotalQty(cart.length > 0 ? cart
        .map(x => x.qty)
        .reduce((x,y) => x + y) : 0)
}
    
    // cart controllers
    const totalPrice = () => {
        setTotalCheckout(cart.length > 0 ? cart
           .map(x => x.price * x.qty)
           .reduce((x,y) => x + y ) : 
           0
           )

           return totalCheckout;
      }

       // sumar otra unidad 
    const qtyPlus = (item) => {
     let index = cart.findIndex((elem,indice) => {
         if(elem.id === item.id){
             return true
         }
         return indice
     })
     cart[index].qty = cart[index].qty + 1
     localStorage.setItem('cart',JSON.stringify(cart))
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
             totalPrice()
             
         }
         else {
             cart[index].qty = cart[index].qty + 1;
             totalPrice()
            
            }
            localStorage.setItem('cart',JSON.stringify(cart))
        }



// restar una unidad 

const qtyMinus = (item) => {
    let index = cart.findIndex((elem,indice) => {
        if(elem.id === item.id){
            return true
        }      
        return indice
    })
    cart[index].qty = cart[index].qty - 1
    localStorage.setItem('cart',JSON.stringify(cart))
   }
   


// Eliminar item del carrito  
    const removeFromCart = (id) => {
        const newCart = cart.filter(x => 
          {return  x.id !== id}
        )
        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
        
    }
    const resetCart = () => {
        localStorage.clear();
    }

    const loadin = () => {
        return setLoading(true)
    }


    const value = {
        addToCart,
        removeFromCart,
        resetCart,
        cart,
        qtyPlus,
        qtyMinus,
        totalPrice,
        totalCheckout,
        totalQty,
        calculateItems,
        loading,
        loadin
        

     
    }

    return (
        <CartContext.Provider value={value} >

            {children}
        </CartContext.Provider>
    )
}