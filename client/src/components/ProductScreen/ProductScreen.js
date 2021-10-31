import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import '../ProductScreen/ProductScreen.css'
import { Link } from 'react-router-dom';
import { GoTriangleRight } from 'react-icons/go';
import { IoCaretBackOutline } from 'react-icons/io5'

const ProductScreen = (props) => {

    const [productDetails, setProductDetails] = useState([]);
    const [descriptionToggle, setDescriptionToggle] = useState(false)

    useEffect(() => {

        axios.get(`http://localhost:3001/api/products/${props.match.params.id}`)
            .then((res) => {
                setProductDetails(res.data)

            })
            .then(() => { })
        
    }, [props.match.params.id])

    const downDescription = () => {
        setDescriptionToggle(!descriptionToggle)
    }


    return (
        <>
            <Navbar />
            <div className='product_square' >
                <div className='location'>
                    <Link to='/catalogue'> <IoCaretBackOutline size={20} className='go_back' />
                        <p> Atrás </p>
                    </Link>
                </div>
                <div className='image__div'>
                    <img alt="" src={productDetails.imgUrl} />
                    <div className='description__div'>
                        <p className='description_title' onClick={downDescription}>  < GoTriangleRight className={descriptionToggle ? 'rotate triangle_right' : 'triangle_right'} size={18} />Ver descripción</p>
                        <p className={descriptionToggle ? ' show description_text' : ' hide description_text'}> tamaño: 15x15</p>
                        <p className={descriptionToggle ? ' show description_text' : ' hide description_text'}> {productDetails.description} </p>
                    </div>
                </div>
                <div className='info__div'>
                    <h1> {productDetails.name} </h1>
                    <p className='price'>{productDetails.price}$ </p>
                    <div className="buy_options">
                        <button> Comprar </button>
                        <button > Añadir al carrito  </button>
                    </div>
                </div>
                <div className='description__div2'>

                    <p className='description_title' onClick={downDescription}>  < GoTriangleRight className={descriptionToggle ? 'rotate triangle_right' : 'triangle_right'} size={18} />Ver descripción</p>
                    
                    <p className={descriptionToggle ? ' show description_text' : ' hide description_text'}> {productDetails.description} </p>
                </div>
            </div>

        </>
    )
}

export default ProductScreen;