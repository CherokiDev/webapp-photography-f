import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { LOGOUT } from '../../redux/types/userType';
import './Profile.scss'
import doorExit from '../../img/door_exit.png'
import Swal from 'sweetalert2';

const Profile = (props) => {

    const history = useHistory();

    const logout = async () => {
        await axios.put(process.env.REACT_APP_API_URL + '/users/logout/' + props.user.email)
        Swal.fire({
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: 'success',
            text: 'Sesión cerrada correctamente'
        })
        props.dispatch({ type: LOGOUT, payload: {} });
        history.push('/')

    }

    return (
        <>
            <div className="logout">Bienvenid@, {props.user.firstname}.<img src={doorExit} alt="Salir" onClick={logout} /></div>
            <div className="profileButtons">
                <button><Link to="/profile/appointments">Gestionar mi cita</Link></button>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(Profile);