import React from "react"
import carrito from '../../assets/img/carrito.png'
import './CartWidget.css'

const CartWidget = () =>{

    return(
        <div>
            <img src={carrito} alt="carrito-compra" />
            <span>4</span>
        </div>
    )
}

export default CartWidget