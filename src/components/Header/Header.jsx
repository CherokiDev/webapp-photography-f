import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.scss';
import logo from '../../img/logo1.png';
import menuIconOpen from '../../img/menuIconOpen.png'
import menuIconClose from '../../img/menuIconClose.png'
import { Modal } from 'reactstrap';

const Header = (props) => {

    const adminRole = ("admin");
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal({
            open: !modal.open
        });
    }

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" />
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
            <div onClick={openModal} className="headerButtonOpenMenu">
                    <img src={menuIconOpen} alt="" />
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
                            <NavLink to="/adminprofile" onClick={openModal} exact>Perfil (admin)</NavLink>
                            :
                            <NavLink to="/profile" onClick={openModal} exact>Perfil</NavLink>
                        }
                    </div>
                    :
                    <div className="headerButtonsMenu">
                        <NavLink to="/login" onClick={openModal} exact>Login / Registro</NavLink>
                    </div>
                }
                <div onClick={openModal} className="headerButtonCloseMenu">
                    <img src={menuIconClose} alt="" />
            </div>
            </Modal>

        </header>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(Header);