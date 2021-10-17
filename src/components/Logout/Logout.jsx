import React from 'react';
import axios from 'axios';
import { connect, useSelector, useDispatch } from 'react-redux';
import  { useHistory } from 'react-router-dom';
import { LOGOUT } from '../../redux/types/userType';
import './Logout.scss'
import doorExit from '../../img/door_exit.png';
import Swal from 'sweetalert2';
import { startLogout } from '../../redux/actions/auth';

const Logout = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    // const { name } = useSelector(state => state.user)

    // const logout = async () => {
    //     await axios.put(process.env.REACT_APP_API_URL + '/users/logout/' + props.user.email)
    //     Swal.fire({
    //         showConfirmButton: false,
    //         timer: 3000,
    //         timerProgressBar: true,
    //         icon: 'success',
    //         text: 'Sesión cerrada correctamente'
    //     })
    //     props.dispatch({ type: LOGOUT, payload: {} });
    //     history.push('/')
    // }

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <div className="logout">Bienvenid@.<img className="quit" src={doorExit} alt="Salir" onClick={handleLogout} /></div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer
    }
}

export default connect(mapStateToProps)(Logout);