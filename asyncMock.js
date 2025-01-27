const productos = [
    {id: 1, nombre: "Yerba", precio: 500, img: "/img/producto.png"},
    {id: 2, nombre: "Fideos", precio: 200, img: "/img/producto.png"},
    {id: 3, nombre: "Arroz", precio: 300, img: "/img/producto.png"},
    {id: 4, nombre: "Aceite", precio: 900, img: "/img/producto.png"}
];

export const getProductos = () => {
    return new Promise ((resolve)=>{
        setTimeout (()=>{
            resolve(productos)
        },2000);
    });
}

export const getProduct = (id) =>{

    return new Promise ((resolve)=>{
        setTimeout(() => {
            const findProduct = productos.find(producto => producto.id === parseInt(id));
            resolve(findProduct);
        },500);
    });
}