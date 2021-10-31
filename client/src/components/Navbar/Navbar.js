import React, {useState} from 'react';
import { GiSofa } from 'react-icons/gi'
import '../Navbar/Navbar.css'
import { FiMenu } from 'react-icons/fi'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';


const Navbar = () => {
    
    const [toggle,setToggle] = useState(false)
    const changeState = () => {
        setToggle(!toggle)
        console.log(toggle)
    }
    const redirect = () => {
        window.location = "/"
    }

    
    return (
        <div className="navbar_container">
            <header className="header-container">
                <div className='logo_container' onClick={redirect}>
                    <GiSofa size={29} className="logo"/>
                    <h1 className="logo-title">sofakma<p className="yellow">store</p></h1>
                </div>

                <div className={toggle ? "navbar-container d-flex" : "navbar-container d-none"}>
                <ul className="nav-menu">
                    <li> <a href={document.getElementById('main') ? '#main' : '/catalogue'} onClick={changeState}>Catálogo</a></li>
                    <li><Link to="/Cart"> Carrito <IoCartOutline /> </Link> </li>
                    <li> FAQ </li>

                </ul>
                </div>
                <div className="menu-cart">
                <IoCartOutline size={30} className='cart-icon' />
                <FiMenu className='menu-burger' size={35} onClick={changeState} />
                </div>
            </header>

        </div>
        
    )
}

export default Navbar