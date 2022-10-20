import './NavBar.css'
import CardWidget from '../CartWidget/CartWidget.js'
import { Link } from 'react-router-dom'


const NavBar = () => {



    return (
        <nav class="navi">
            <div class="titulo">
                <h2>Clara Joyas</h2>
            </div>
            <div class="itemsnavbar">
                <Link to='/' class="itemnavbar" >Inicio</Link>
                <Link to='categorias/Anillos' class="itemnavbar" >Anillos</Link>
                <Link to='categorias/Dijes' class="itemnavbar">Dijes</Link>
                <Link to='categorias/Argollas' class="itemnavbar">Argollas</Link>
                <CardWidget />
            </div>
        </nav>

    )
}

export default NavBar