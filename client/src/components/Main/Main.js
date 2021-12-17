import React, { useEffect, useState } from 'react';
import './Main.css'
import Product from '../Product/Product'
import axios from 'axios'



const Main = () => {
const [datax,setData] = useState([])

        useEffect(() => {
        axios.get('https://sofakma-store.herokuapp.com/api/products')
        .then((res) => { 
            setData(res.data)
        })
    },[])

    return (

<>
        <h1 className="main_title" > Catalogo </h1>
        <div className='main'  id="main">
        
        {datax.map((x,y) => {
           return ( 
             <Product id={`${x._id}`} to={`/products/${x._id}`} key={x._id} name={x.name} image={x.imgUrl}  description={x.description} price={x.price} /> 
           
           )
        })}

        </div>
        </>
    )
}

export default Main