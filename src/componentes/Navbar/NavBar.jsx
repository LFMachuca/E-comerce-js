import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
const NavBar = () =>{
    return(
        <header>
            <h1>Artesanias Jorge</h1>

            <nav>
                <ul>
                    <li><Link to={`/`}>Inicio</Link></li>
                    <li><Link to={`/*`}>Categorias</Link></li>
                    <li>Otros</li>
                    <li>Decoracion</li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar