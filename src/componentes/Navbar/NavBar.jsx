import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () =>{
    return(
        <header>
            <h1>Artesanias Jorge</h1>

            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Tablas</li>
                    <li>Cucharas</li>
                    <li>Decoracion</li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar