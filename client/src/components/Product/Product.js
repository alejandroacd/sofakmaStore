import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext/cartContext'
import { IoCartOutline } from 'react-icons/io5'
import { HiOutlineCash } from 'react-icons/hi'

const Product = (props) => {

    const { addToCart } = useCart()

    return (


        <div className="product_space">

            <div className="product_box">

                <img src={props.image} alt="" />
                <div className="product_container">
                    <div className="information">
                        <h1> {props.name} </h1>
                        <p> ${props.price}  </p>
                    </div>
                    <div className="buy_section">

                        <Link to={props.to} id={props.id} className='details_link'><button>  Ver producto  </button> </Link>
                        <button onClick={() => addToCart(props)}> Añadir al carrito  <IoCartOutline className='cartbutton' /></button>
                    </div>
                    <h2>Métodos de pago: </h2>
                    <img src="images/MercadoPago.png" className="mercadopago_image" ></img>
                </div>

            </div>




        </div>


    )
}

export default Product