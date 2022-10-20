import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({ id, stock, nombre, img, precio }) => {
    return (
        <li className="tarjetita">
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} />
            <p>${precio}</p>
            <p>Cantidad: {stock} </p>
            <Link to={`/detalles/${id}`}>Ver Detalle</Link>


        </li>


    )
}

export default Item