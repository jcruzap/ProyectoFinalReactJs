import { useContext } from "react";
import CartContext from "../../context/CartContext";


const CartItem = ({ id, nombre, precio, quantity }) => {

    const { removeItem } = useContext(CartContext)

    const remover = (id) => {
        removeItem(id)

    }

    return (
        <>

            <h2>{nombre}</h2>
            <p>Cantidad: {quantity}</p>
            <p>Precio unitario: ${precio}</p>
            <p>Subtotal: ${precio * quantity}</p>
            <button onClick={() => remover(id)}>Remover del Carrito </button>

        </>
    )


}


export default CartItem