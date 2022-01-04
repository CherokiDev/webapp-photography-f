import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import './Header.scss';
import logo from '../../img/logo3.png';
import menuIconOpen from '../../img/menuIconOpen.png'
import menuIconClose from '../../img/menuIconClose.png'
import { Modal } from 'reactstrap';
import Swal from 'sweetalert2'

const Header = (props) => {

    const { uid } = useSelector(state => state.user)

    const adminRole = ("admin");
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal({
            open: !modal.open
        });
    }

    const manejarModal = () => {
        Swal.fire({
            showConfirmButton: true,                    
            icon: 'success',
            text: 'Revise su email, se le ha enviado un enlace para crear una nueva contraseña'
        })
    }

    return (
        <header className="header">
            <button onClick={manejarModal}>modal</button>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="inicio" />
                </Link>
            </div>
            <div className="headerButtons">
                <NavLink to="/" exact activeStyle={{ textDecoration: 'underline' }}>Inicio</NavLink>
            </div>
            <div className="headerButtons">
                <NavLink to="/gallery" exact activeStyle={{ textDecoration: 'underline' }}>Galería</NavLink>
            </div>
            <div className="headerButtons">
                <NavLink to="/aboutme" exact activeStyle={{ textDecoration: 'underline' }}>Sobre mí</NavLink>
            </div>
            <div className="headerButtons">
                <NavLink to="/contact" exact activeStyle={{ textDecoration: 'underline' }}>Contacto</NavLink>
            </div>
            {uid
                ?
                <div className="headerButtons">
                    {adminRole.includes(props?.user)
                        ?
                        <NavLink to="/adminprofile" exact activeStyle={{ textDecoration: 'underline' }}>Mi Perfil (admin)</NavLink>
                        :
                        <NavLink to="/profile" exact activeStyle={{ textDecoration: 'underline' }}>Mi Perfil</NavLink>
                    }
                </div>
                :
                <div className="headerButtons">
                    <NavLink to="/login" exact activeStyle={{ textDecoration: 'underline' }}>Mi perfil</NavLink>
                </div>
            }
            <div onClick={openModal} className="headerButtonOpenMenu">
                <img src={menuIconOpen} alt="Abrir menú" />
            </div>


            <Modal className="modal" isOpen={modal.open}>
                <div className="headerButtonsMenu">
                    <NavLink className="headerButtonsMenu" to="/" onClick={openModal} exact>Inicio</NavLink>
                </div>
                <div className="headerButtonsMenu">
                    <NavLink to="/gallery" onClick={openModal} exact>Galería</NavLink>
                </div>
                <div className="headerButtonsMenu">
                    <NavLink to="/aboutme" onClick={openModal} exact>Sobre mí</NavLink>
                </div>
                <div className="headerButtonsMenu">
                    <NavLink to="/contact" onClick={openModal} exact>Contacto</NavLink>
                </div>
                {props.user?.token
                    ?
                    <div className="headerButtonsMenu">
                        {adminRole.includes(props.user.role)
                            ?
                            <NavLink to="/adminprofile" onClick={openModal} exact>Mi Perfil (admin)</NavLink>
                            :
                            <NavLink to="/profile" onClick={openModal} exact>Mi Perfil</NavLink>
                        }
                    </div>
                    :
                    <div className="headerButtonsMenu">
                        <NavLink to="/login" onClick={openModal} exact>Mi Perfil</NavLink>
                    </div>
                }
                <div onClick={openModal} className="headerButtonCloseMenu">
                    <img src={menuIconClose} alt="Cerrar menú" />
                </div>
            </Modal>

        </header>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

export default connect(mapStateToProps)(Header);