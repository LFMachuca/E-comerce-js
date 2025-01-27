import React, { useEffect, useState } from "react";
import { getProductos } from "../../../asyncMock"
import ItemList from "../itemList/ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos()
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <h2>Nuestros Productos</h2>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer