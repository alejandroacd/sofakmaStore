import React, {useState} from 'react';
import { GiSofa } from 'react-icons/gi'
import '../Navbar/Navbar.css'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
    console.log(document.getElementById('main'))
    const [toggle,setToggle] = useState(false)
    const changeState = () => {
        setToggle(!toggle)
        console.log(toggle)
    }
    const redirect = () => {
        window.location = "/"
    }

    const main = document.getElementById('main');

    return (
        <div className="navbar_container">
            <header className="header-container">
                <div className='logo_container' onClick={redirect}>
                    <GiSofa size={30} className="logo"/>
                    <h1 className="logo-title">sofakma<p className="yellow">store</p></h1>
                </div>

                <div className={toggle ? "navbar-container d-flex" : "navbar-container d-none"}>
                <ul className="nav-menu">
                    <li> <a href={document.getElementById('main') ? '#main' : '/'} onClick={changeState}>Catálogo</a></li>
                    <li> Carrito </li>
                    <li> FAQ </li>

                </ul>
                </div>
              

                <FiMenu className='menu-burger' size={35} onClick={changeState} />
            </header>

        </div>
        
    )
}

export default Navbar