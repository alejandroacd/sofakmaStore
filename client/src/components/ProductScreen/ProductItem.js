import React, { useState } from 'react'  
import '../ProductScreen/ProductScreen.css'
import { Link } from 'react-router-dom';
import { GoTriangleRight } from 'react-icons/go';
import { IoCaretBackOutline } from 'react-icons/io5'
import { IoCartOutline } from 'react-icons/io5'
import { useCart } from '../../CartContext/cartContext'
import axios from 'axios';

const ProductItem = (props) => {

    const actualProduct = { 
        name: props.name,
        price: props.price,
        qty: 1
    }


    const [descriptionToggle, setDescriptionToggle] = useState(false)
    const { addToCart, loadin, loading } = useCart();
   
   
    const downDescription = () => {
        setDescriptionToggle(!descriptionToggle)
    }

    const buyProduct = () => {
        loadin();
        axios.post('http://localhost:3001/checkout',[actualProduct])
        .then(() => console.log(actualProduct))
        .catch((err) => {
            console.log(err)
        })

        window.location = "http://localhost:3001/checkout"
    }


    return (
        <>

         <div className='product_square' >
            { loading ? <div className="load-3">
         
        
         <div class="line"></div>
         <div class="line"></div>
         <div class="line"></div>    
       </div>  : <> <div className='location'>
                    <Link to='/catalogue'> <IoCaretBackOutline size={20} className='go_back' />
                        <p> Atrás </p>
                    </Link>
                </div>
                <div className='image__div'>
                    <img alt="" src={props.image} />
                    <div className='description__div'>
                        <p className='description_title' onClick={downDescription}>  < GoTriangleRight className={descriptionToggle ? 'rotate triangle_right' : 'triangle_right'} size={18} />Ver descripción</p>
                        <p className={descriptionToggle ? ' show description_text' : ' hide description_text'}> tamaño: 15x15</p>
                        <p className={descriptionToggle ? ' show description_text' : ' hide description_text'}> {props.description} </p>
                    </div>
                </div>
                <div className='info__div'>
                    <h1> {props.name} </h1>
                    <p className='price'>{props.price}$ </p>
                    <div className="buy_options">
                        <button onClick={buyProduct}> Comprar </button>
                        <button onClick={() => addToCart(props)}> Añadir al carrito <IoCartOutline /> </button>
                    </div>
                </div>
                <div className='description__div2'>

                    <p className='description_title' onClick={downDescription}>< GoTriangleRight className={descriptionToggle ? 'rotate triangle_right' : 'triangle_right'} size={18}
                    />Ver descripción</p>

                    <p className={descriptionToggle ? ' show description_text' : ' hide description_text'}> {props.description} </p>
                </div> 
                </> }
            </div>
     
        </>
    )
}

export default ProductItem