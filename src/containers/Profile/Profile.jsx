import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { LOGOUT } from '../../redux/types/userType';

const Profile = (props) => {

    const history = useHistory();
    const [msg, setMsg] = useState("")
    const [dataAppointment, setDataAppointment] = useState()
    const checkToken = props.user.token
    const withAppointment = "Ya tienes una cita"
    const withoutAppointment = "No tienes ninguna cita"

    const statusAppointment = {
        status: "Disponible"
    }

    useEffect(() => {
        const userId = async () => {
            await axios.get('http://localhost:3005/appointments/byUserId/' + props.user.id, {
                headers: {
                    Authorization: "Bearer " + checkToken
                }
            })
                .then((res) => {
                    if (!res.data.UserId) {
                        setMsg(withoutAppointment)
                    } else {
                        setDataAppointment(res.data)
                        setMsg(withAppointment)
                    }
                }).catch((err) => {
                    return err
                });
        }
        userId()
        // eslint-disable-next-line
    }, [])

    const canceledAppointment = async () => {
        await axios.put('http://localhost:3005/dateappointments/update/' + dataAppointment.DateappointmentId, statusAppointment)
            .then(() => {
                axios.delete('http://localhost:3005/appointments/delete/' + dataAppointment.id, {
                    headers: {
                        Authorization: "Bearer " + checkToken
                    }
                })
            }).catch((err) => {
                return err
            });
    }

    const logout = async () => {
        await axios.put('http://localhost:3005/users/logout/' + props.user.email)
        props.dispatch({ type: LOGOUT, payload: {} });
        setTimeout(() => {
            history.push('/')
        }, 1000)
    }

    return (
        <>
            <div>Perfil</div>
            <div>{msg}</div>
            {msg === withoutAppointment
                ?
                <button><Link to="/profile/appointments">Pedir una cita</Link> </button>
                :
                <>
                    <div>Solo puedes tener una cita</div>
                    <button onClick={canceledAppointment}>Cancelar / modificar cita actual</button>
                </>
            }
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