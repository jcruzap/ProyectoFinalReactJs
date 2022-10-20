import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import FormCheckout from '../Checkout/FormCheckout'
import { db } from "../../services/firebase"
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)
    // const [orderCreated, setOrderCreated] = useState(false)
    const [newOrder, setNewOrder] = useState(false)
    const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext)


    const [buyer, setBuyer] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phone: ''
    })

    const navigate = useNavigate()

    const totalQuantity = getQuantity()
    const total = getTotal()

    const createOrder = async () => {
        setIsLoading(true)
        try {
            const newOrder = {
                buyer,
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            const outOfStock = []

            const batch = writeBatch(db)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, newOrder)

                console.log(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
                setNewOrder(true)
                setTimeout(() => {
                    navigate('/')
                }, 3000)
            } else {
                console.log('Hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return <h1>Se esta generando tu orden...</h1>
    }

    if (newOrder) {
        return <h1>{`Su orden se genero correctamente`}</h1>
    }

    return (
        <>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <div>
                <FormCheckout createOrder={createOrder} buyer={buyer} setBuyer={setBuyer} />
            </div>

        </>
    )
}

export default Checkout