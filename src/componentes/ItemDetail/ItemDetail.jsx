import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../asyncMock';

const ItemDetail = () => {
    const {id}=useParams();
    const[product,setProduct] = useState(null);

    useEffect(() => {
        getProduct(id)
            .then(respuesta =>{
                setProduct(respuesta)
                console.log('Producto recibido:', respuesta) 
            } )
            .catch(err => console.log(err))
    },[id]);

    if(!product){
        return <div>Cargando...</div>
    }
  return (
    <div>

        <h2>Detalle de {product.nombre}</h2>
        <img src={product.img} alt={product.nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perspiciatis quaerat pariatur temporibus culpa provident expedita quae sequi beatae tempore exercitationem non neque blanditiis, dolore, ex est soluta itaque odio!</p>
        <p>Precio: ${product.precio}</p>

    </div>
  )
}

export default ItemDetail