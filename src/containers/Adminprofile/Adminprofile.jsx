import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from '../../components/Logout/Logout';
import { ALLUSERS } from '../../redux/types/userType';

const Adminprofile = (props) => {

    const checkToken = props.user.token;

    const getAllUsers = async () => {
        await axios.get(process.env.REACT_APP_API_URL + '/users/allUsers', {
            headers: {
                Authorization: "Bearer " + checkToken
            }
        })
        .then((res) => {
            props.dispatch({ type: ALLUSERS, payload: res.data })
        }).catch((err) => {
            return err
        });
    }

    return (
        <div className="main">
            <Logout />
            <div className="buttons">
                <button><Link to="/adminprofile/adminappointments">Gestionar las citas</Link></button>
                <button onClick={getAllUsers}><Link to="/adminprofile/adminusers">Lista de clientes</Link></button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        users: state.userReducer.users,
    }
}

export default connect(mapStateToProps)(Adminprofile);