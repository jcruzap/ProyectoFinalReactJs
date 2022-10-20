import './Counter.css'
import { useState } from 'react'

const Counter = ({ cantidad = 0, initial = 1, agregar }) => {

    const [quantity, setQuantity] = useState(initial)

    const incrementar = () => {
        if (quantity < cantidad) {

            setQuantity(quantity + 1)
        }
    }

    const decrementar = () => {
        if (quantity > 1) {

            setQuantity(quantity - 1)
        }
    }

    return (
        <div >
            <div class="contadorcarrito">
                <button class="botonCarrito" onClick={decrementar}>-</button>
                <p>{quantity}</p>
                <button class="botonCarrito" onClick={incrementar}>+</button>
            </div>

            <button class="botonCarrito" onClick={() => agregar(quantity)} >Agregar al Carrito</button>

        </div>
    )
}

export default Counter