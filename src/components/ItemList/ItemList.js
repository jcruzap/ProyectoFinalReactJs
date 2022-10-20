import Item from '../Item/Item'

const ItemList = ({ productos, setPaginas }) => {
    return (
        <ul>
            {productos.map(prod => <Item key={prod.id} {...prod} setPaginas={setPaginas} />)}
        </ul>
    )
}

export default ItemList