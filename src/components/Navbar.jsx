import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import "../styles/Nav.css"

export default function Navbar(){
    return(
        <header className="containerNav">
            <Link to='/' className="link logo" >CineLibrary</Link>
            <nav className="caixaNav">
                <Link to='/Movies' className="link" >Movies</Link>
                <Link to='/Series' className="link" >Séries</Link>
                <Link to='/Animes' className="link" >Animes</Link>
            </nav>
            <Link to='/Search' className="link search" ><p>Search</p><IoSearchOutline /></Link>
        </header>
    )
}