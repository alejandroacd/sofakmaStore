import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import '../ProductScreen/ProductScreen.css'
import { GoTriangleRight } from 'react-icons/go';

const ProductScreen = (props) => {
    const [productDetails,setProductDetails] = useState([]);
    const [descriptionToggle, setDescriptionToggle] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:3001/api/products/${props.match.params.id}`)
        .then((res) => {
            setProductDetails(res.data)
          
        })
        .then(() => {})
        console.log(productDetails)
    },[])
    
    const downDescription = () => {
        setDescriptionToggle(!descriptionToggle)
    }

    
    return (
        <>
    <Navbar />
    <div className='product_square' >
    <img src={productDetails.imgUrl} />
    <h1> {productDetails.name} </h1>
    <p className='price'>{productDetails.price}$ </p>
    <div className="buy_options">
    <button> Comprar</button>
    <button> Añadir al carrito  </button>    
     </div>

     <p className='description_title' onClick={downDescription}>  < GoTriangleRight className={descriptionToggle ? 'rotate triangle_right' : 'triangle_right'}size={18} />Ver descripción</p>
     <p className={descriptionToggle ? ' d-flex description_text' : 'd-none description_text'}> tamaño: 15x15</p>
     <p className={descriptionToggle ? ' d-flex description_text' : 'd-none description_text'}> {productDetails.description} </p>
    </div>

        </>
    )
}

export default ProductScreen;