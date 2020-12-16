import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div>
                <NavLink to="/" exact>Inicio</NavLink>
            </div>
            <div>
                <NavLink to="/gallery" exact>Galería</NavLink>
            </div>
            <div>
                <NavLink to="/aboutme" exact>Sobre mí</NavLink>
            </div>
            <div>
                <NavLink to ="/contact" exact>Contacto</NavLink>
            </div>
            <div>
                <NavLink to ="/login" exact>Login</NavLink>
            </div>
        </header>
    )
}

export default Header;