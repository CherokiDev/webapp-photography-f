import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { LOGOUT } from '../../redux/types/userType';

const Profile = (props) => {

    const history = useHistory();
  
    const logout = async () => {
        await axios.put(process.env.REACT_APP_API_URL + '/users/logout/' + props.user.email)
        props.dispatch({ type: LOGOUT, payload: {} });
        history.push('/')
        
    }

    return (
        <>
            <div>Perfil</div>
            <button><Link to="/profile/appointments">Gestionar mi cita</Link></button>
            <div></div>
            <button onClick={logout}>Salir</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(Profile);