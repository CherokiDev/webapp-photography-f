import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.scss';
import logo from '../../img/logo1.png'

const Header = (props) => {

    const adminRole = ("admin");

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                <img src={logo} alt=""/>
                </Link>
            </div>
            <div className="headerButtons">
                <NavLink to="/" exact>Inicio</NavLink>
            </div>
            <div className="headerButtons">
                <NavLink to="/gallery" exact>Galería</NavLink>
            </div>
            <div className="headerButtons">
                <NavLink to="/aboutme" exact>Sobre mí</NavLink>
            </div>
            <div className="headerButtons">
                <NavLink to="/contact" exact>Contacto</NavLink>
            </div>
            {props.user?.token
                ?
                <div className="headerButtons">
                    {adminRole.includes(props.user.role)
                        ?
                        <NavLink to="/adminprofile" exact>Perfil (admin)</NavLink>
                        :
                        <NavLink to="/profile" exact>Perfil</NavLink>
                    }
                </div>
                :
                <div className="headerButtons">
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