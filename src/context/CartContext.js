import { useState, createContext } from "react"

const CartContext = createContext()




export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const agregarItem = (productoAgregado) => {
        if (!isInCart(productoAgregado.id)) {

            setCart([...cart, productoAgregado])
        } else {
            const cartActualizado = cart.map(prod => {
                if (prod.id === productoAgregado.id) {
                    const productoActualizado = {
                        ...prod,
                        quantity: productoAgregado.quantity

                    }
                    return productoActualizado
                } else {
                    return prod
                }

            })

            setCart(cartActualizado)
        }

    }

    const removeItem = (id) => {
        const nuevoCarritoSinProducto = cart.filter(prod => prod.id !== id)
        setCart(nuevoCarritoSinProducto)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu
    }

    const getProductQuantity = (id) => {
        const productos = cart.find(prod => prod.id === id)

        return productos?.quantity
    }

    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.precio
        })

        return accu
    }


    return (
        <CartContext.Provider value={{ cart, agregarItem, getQuantity, isInCart, removeItem, clearCart, getProductQuantity, getTotal }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext