import { useState, useEffect } from "react";
// import { recuperarProductosxID } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'




const ItemDetailContainer = () => {
    const [productos, setProductos] = useState()
    const [loading, setLoading] = useState(true)
    const { idProductos } = useParams()




    useEffect(() => {
        getDoc(doc(db, 'products', idProductos)).then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProductos(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [idProductos])

    return (
        <div>
            <h1>Mira a fondo nuestros productos!</h1>
            {loading ? <h1>Cargando producto</h1> : <ItemDetail {...productos} />}
        </div>
    )
}

export default ItemDetailContainer