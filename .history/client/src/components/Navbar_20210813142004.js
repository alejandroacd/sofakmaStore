import React from 'react';
import { GiSofa } from 'react-icons/gi'
import '../components/Navbar.css'
import { FiMenu } from 'react-icons/fi'


const Navbar = () => {
    return (
        <div className="navbar_container">
            <header className="header-container">
                <div className='logo_container'>
                    <GiSofa size={30} className="logo"/>
                    <h1 className="logo-title">sofakma<p className="yellow">store</p></h1>
                </div>

                <ul className="nav-menu">
                    <li> Catálogo </li>
                    <li> Carrito </li>
                    <li> FAQ </li>

                </ul>

                <FiMenu />
            </header>

        </div>
    )
}

export default Navbar