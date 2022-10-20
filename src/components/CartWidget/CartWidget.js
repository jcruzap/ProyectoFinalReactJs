import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()

    return (
        <div className="carrito">
            <img className="img1" src='carrito.png' alt="CartWidget" />
            {quantity}
        </div>
    )
}

export default CartWidget