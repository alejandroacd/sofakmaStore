import React, { useEffect, useState } from 'react';
import './Main.css'
import Product from '../Product/Product'
import axios from 'axios'



const Main = () => {
const [datax,setData] = useState([])

        useEffect(() => {
        axios.get('http://localhost:3001/api/products')
        .then((res) => { 
            setData(res.data)
        })
    },[])

    return (
        <div className='main'  id="main">

            <h1 className="main_title"> Catalogue </h1>
        
        {datax.map((x,y) => {
           return ( 
             <Product to={`/products/${x._id}`} key={x._id} name={x.name} image={x.imgUrl}  description={x.description} price={x.price} /> 
           
           )
        })}

        </div>
    )
}

export default Main