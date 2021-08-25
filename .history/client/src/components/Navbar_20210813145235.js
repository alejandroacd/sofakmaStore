import React, {useState} from 'react';
import { GiSofa } from 'react-icons/gi'
import '../components/Navbar.css'
import { FiMenu } from 'react-icons/fi'


const Navbar = () => {
    
    const [toggle,setToggle] = useState(false)
    const changeState = () => {
        setToggle(!toggle)
        console.log(toggle)
    }

    return (
        <div className="navbar_container">
            <header className="header-container">
                <div className='logo_container'>
                    <GiSofa size={30} className="logo"/>
                    <h1 className="logo-title">sofakma<p className="yellow">store</p></h1>
                </div>

        

                <FiMenu className='menu-burger' size={25} onClick={changeState} />
            </header>

        </div>
                <div className={toggle ? "navbar-container d-flex" : "navbar-container d-none"}>
                <ul className="nav-menu">
                    <li> Catálogo </li>
                    <li> Carrito </li>
                    <li> FAQ </li>

                </ul>
                </div>
              
    )
}

export default Navbar