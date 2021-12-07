import React from 'react';
import Navbar from '../Navbar/Navbar'
import '../FAQ/Faq.css'
const Faq = () => {
    return (

    <>
        <Navbar />
        <div className='faq-container'>
            <h1>sofakma <p className='store'>store</p></h1>
            <p className='faq_question'>¿Qué es Sofakma Store?</p>
            <p className='faq_answer'>Es un e-commerce con fines prácticos, desarrollado con ReactJs, Express, MongoDB, Checkout Pro (SDK de Mercado) como pasarela de pago y Context API.</p>
            <p className='faq_question'>¿Realmente se pueden comprar los productos?</p>
            <p className='faq_answer'> No. Los productos desplegados en el catálogo no existen físicamente y la funcionalidad de Mercado Pago está creado con una cuenta de testeo. </p>
        </div>
      </>  
    
    )
}

export default Faq;