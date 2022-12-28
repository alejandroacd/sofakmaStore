import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import Navbar from '../Navbar/Navbar'
import axios from 'axios'

const ProductScreen = (props) => {


    const [productDetails, setProductDetails] = useState([]);

    
    useEffect(() => {
    
        axios.get(`https://sofakmastore-production.up.railway.app/api/products/${props.match.params.id}`)
            .then((res) => {
                setProductDetails(res.data)
                
            })
          

    }, [props.match.params.id])

    return (
        <>
            <Navbar />
            <ProductItem id={productDetails._id}  to={`https://sofakmastore-production.up.railway.app/products/${props.match.params.id}`} key={productDetails.id} name={productDetails.name} image={productDetails.imgUrl}  description={productDetails.description} price={productDetails.price} />

        </>
    )
}

export default ProductScreen;