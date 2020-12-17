import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LOGOUT } from '../../redux/types/userType';

const Profile = (props) => {

    const history = useHistory();

    const logout = async() => {
        await axios.put('http://localhost:3005/users/logout/' + props.user.email)
        props.dispatch({ type: LOGOUT, payload: {}});
        setTimeout(() => {
            history.push('/')
        }, 1500)
    }

    return (
        <>
            <div>Perfil</div>
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