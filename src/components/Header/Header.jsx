import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {

    const adminRole = ("admin");

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
                <NavLink to="/contact" exact>Contacto</NavLink>
            </div>
            {props.user?.token
                ?
                <div>
                    {adminRole.includes(props.user.role)
                        ?
                        <NavLink to="/adminprofile" exact>Perfil (admin)</NavLink>
                        :
                        <NavLink to="/profile" exact>Perfil</NavLink>
                    }
                </div>
                :
                <div>
                    <NavLink to="/login" exact>Login / Registro</NavLink>
                </div>
            }
        </header>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(Header);