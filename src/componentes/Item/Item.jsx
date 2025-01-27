import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className="product-card">
        <img src={img} alt={nombre} className="product-card-img" />
        <h2>{nombre}</h2>
        <p>$ {precio}</p>
        <p className="hide">{id}</p>
        <button><Link to={`/product/${id}`}>Detalle</Link></button>
    </div>
  )
}
export default Item