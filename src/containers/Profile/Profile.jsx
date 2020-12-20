import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { LOGOUT } from '../../redux/types/userType';

const Profile = (props) => {

    const history = useHistory();
    const [msg, setMsg] = useState("")

    useEffect(() => {
        const userId = async() => {
            await axios.get('http://localhost:3005/appointments/byUserId/' + props.user.id)
            .then((res) => {
                if(!res.data.UserId) {
                setMsg("No tienes ninguna cita")
            }else{
                setMsg("Ya tienes una cita")
            }
            }).catch((err) => {
                return err
            });
        }
        userId()
        // eslint-disable-next-line
    }, [])

    const logout = async() => {
        await axios.put('http://localhost:3005/users/logout/' + props.user.email)
        props.dispatch({ type: LOGOUT, payload: {}});
        setTimeout(() => {
            history.push('/')
        }, 1000)
    }

    return (
        <>
            <div>Perfil</div>
            <div>{msg}</div>
            <button><Link to="/profile/appointments">Pedir / modificar una cita</Link> </button>
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