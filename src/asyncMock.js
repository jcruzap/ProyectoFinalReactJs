

const productos = [

    {
        id: '1', nombre: 'SOL0301A Solitario Oro Blanco 14k'
        , precio: 25000, categoria: 'Anillos', img: 'https://img1.wsimg.com/isteam/ip/ddf57ad0-6048-46a3-bb9a-d34ace5e755d/ols/SOL0301A.jfif/:/rs=w:400,h:400', stock: 10, descripcion: 'Oro Blanco - Con Circonia - Medidas: 6, 7, 8, 9 - Peso Aproximado: 1.8 gr'
    },
    { id: '2', nombre: 'AND0106A Anillo Dama Ancho 14k', precio: 32299, categoria: 'Anillos', img: 'https://img1.wsimg.com/isteam/ip/ddf57ad0-6048-46a3-bb9a-d34ace5e755d/ols/AND0106A.jfif/:/rs=w:400,h:400', stock: 12, descripcion: 'Con Circonias - Medidas: de 6 a 9 - Peso Aproximado 2.2 gr' },
    {
        id: '3', nombre: 'MED0364Y Medalla San Judas 10K', precio: 11100, categoria: 'Dijes', img: 'https://img1.wsimg.com/isteam/ip/ddf57ad0-6048-46a3-bb9a-d34ace5e755d/ols/MED0364Y.jfif/:/rs=w:400,h:400', stock: 20, descripcion: 'Oro Amarillo -Con Circonias - Medida Aproximada: 1.8  cm - Peso Aproximado: 1.1 gr'
    },
    {
        id: '4', nombre: 'DIJ0105A Dije Libélula', precio: 8900, categoria: 'Dijes', img: 'https://img1.wsimg.com/isteam/ip/ddf57ad0-6048-46a3-bb9a-d34ace5e755d/ols/DIJ0156B.jfif/:/rs=w:400,h:400', stock: 10, descripcion: 'Peso Aproximado: 1.1 g - Medida Aproximada: 1.8 cm'
    },
    {
        id: '5', nombre: 'ARG0203A Argolla de Matrimonio Oro Blanco 14K', precio: 19000, categoria: 'Argollas', img: 'https://img1.wsimg.com/isteam/ip/ddf57ad0-6048-46a3-bb9a-d34ace5e755d/ols/ARG0203A.jfif/:/rs=w:400,h:400', stock: 5, descripcion: 'Confort Light Lisa -Oro Blanco -Medidas Aproximadas: de 4.5 a 7.0 - Peso Aproximado: de 1.8 gr a 2.5 gr'
    },
    {
        id: '6', nombre: 'ARG0111X Argolla de Matrimonio 10K', precio: 23599, categoria: 'Argollas', img: 'https://img1.wsimg.com/isteam/ip/ddf57ad0-6048-46a3-bb9a-d34ace5e755d/ols/ARG0111X.jfif/:/rs=w:400,h:400', stock: 12, descripcion: 'Oro Amarillo, Blanco y Rosa - Medidas: de 4.5 a 13.0 - Peso Aproximado: de 1.3 gr a 1.8 gr'
    },

]

export const recuperarProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 600)
    })
}

export const recuperarProductosfiltrados = (idCategorias) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === idCategorias))
        }, 600)
    })
}

export const recuperarProductosxID = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 600)

    })
}