import './ItemListContainer.css'
import { useState, useEffect } from 'react'
// import { recuperarProductos, recuperarProductosfiltrados } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = ({ saludo, setPaginas }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategorias } = useParams()

    useEffect(() => {

        setLoading(true)

        const collectionRef = !idCategorias
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('categoria', '==', idCategorias))

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProductos(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })


    }, [idCategorias])


    if (loading) {
        return <h1>Cargando productos...</h1>
    }


    return (
        <>

            <h1 class="saludos">{saludo}</h1>

            <ItemList productos={productos} setPaginas={setPaginas} />

        </>

    )
}

export default ItemListContainer