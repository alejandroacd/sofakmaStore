import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

const Product = (props) => {


    
    return (
        <Link to={props.to}>
    <div  className="product_space">
    <div className="product_box">
    <img src={props.image} alt=""/>
    <div className="product_container">
        <div className="information">
         <h1> {props.name} </h1>
         <p> {props.description} </p>
         </div>
         <div className="buy_section"> 
             <p> ${props.price}  </p>
             <button> Comprar </button>
         </div>
         </div>
    </div>
    </div>
    </Link >
    
    )
}

export default Product