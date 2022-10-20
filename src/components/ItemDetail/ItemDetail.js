import { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import Counter from "../Counter/Counter"
import CartContext from "../../context/CartContext"


const ItemDetail = ({ id, nombre, img, precio, descripcion, stock }) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0)


    const { agregarItem, getProductQuantity } = useContext(CartContext)

    const paraAgregar = (quantity) => {


        setCantidadAgregada(quantity)

        const productoAgregado = {
            id, nombre, precio, quantity
        }

        agregarItem(productoAgregado)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <>

            <li className="tarjetita">
                <h3>{nombre}</h3>
                <img src={img} alt={nombre} />
                <p>Precio: ${precio}</p>
                <p>Descripcion: {descripcion}</p>

                {
                    cantidadAgregada === 0 ? (

                        <Counter cantidad={stock} agregar={paraAgregar} initial={productQuantity} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }



            </li>



        </>
    )
}

export default ItemDetail