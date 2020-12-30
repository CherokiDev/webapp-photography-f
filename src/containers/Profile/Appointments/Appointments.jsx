import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Logout from '../../../components/Logout/Logout';
import './Appointments.scss'
import back from '../../../img/return150px.png'

const Appointments = (props) => {
    const [availableDates, setAvailableDates] = useState([])
    const [msg, setMsg] = useState("")
    const [dataAppointment, setDataAppointment] = useState()
    const checkToken = props.user.token
    /* const withAppointment = "Ya tienes una cita" */
    const withoutAppointment = "No tienes ninguna cita"
    const history = useHistory();

    const statusAppointment = {
        status: "Disponible"
    }

    useEffect(() => {
        const userId = async () => {
            await axios.get(process.env.REACT_APP_API_URL + '/appointments/byUserId/' + props.user.id, {
                headers: {
                    Authorization: "Bearer " + checkToken
                }
            })
                .then((res) => {
                    if (!res.data.UserId) {
                        setMsg(withoutAppointment)
                    } else {
                        axios.get(process.env.REACT_APP_API_URL + '/dateappointments/getById/' + res.data.DateappointmentId)
                            .then((res) => {
                                setMsg(`Tienes una cita para el ${moment(res.data.date).format('dddd, LL [ a las ] h:mm A')}`)
                            }).catch((err) => {
                                return err
                            });
                        setDataAppointment(res.data)
                        /* setMsg(withAppointment) */
                    }
                }).catch((err) => {
                    return err
                });
        }
        userId()
        // eslint-disable-next-line
    }, [])

    const canceledAppointment = async () => {
        await axios.put(process.env.REACT_APP_API_URL + '/dateappointments/update/' + dataAppointment.DateappointmentId, statusAppointment)
            .then(() => {
                axios.delete(process.env.REACT_APP_API_URL + '/appointments/delete/' + dataAppointment.id, {
                    headers: {
                        Authorization: "Bearer " + checkToken
                    }
                })
                Swal.fire("Cita eliminada correctamente")
                setTimeout(() => {
                    history.push('/profile')
                }, 1000)
            }).catch((err) => {
                return err
            });
    }

    const getAvailableDates = async () => {
        await axios.get(process.env.REACT_APP_API_URL + '/dateappointments/availableDates')
            .then((res) => {
                setAvailableDates(res.data.availableDates)
            }).catch((err) => {
                return err
            });
    }

    useEffect(() => {
        const dates = async () => {
            await getAvailableDates()
        }
        dates()
    }, [])

    const handleSubmit = event => {
        event.preventDefault();

        const checkToken = props.user.token
        const appointmentsData = {
            type: event.target.type.value,
            observations: event.target.observations.value,
            UserId: props.user.id,
            DateappointmentId: event.target.DateappointmentId.value
        }

        const statusAppointment = {
            status: "Reservada"
        }

        axios.post(process.env.REACT_APP_API_URL + '/appointments/create', appointmentsData, {
            headers: {
                Authorization: "Bearer " + checkToken
            }
        })
            .then((res) => {
                axios.put(process.env.REACT_APP_API_URL + '/dateappointments/update/' + appointmentsData.DateappointmentId, statusAppointment)
                Swal.fire("Cita creada correctamente")
                setTimeout(() => {
                    history.push('/profile')
                }, 1000)
                return res
            }).catch((err) => {
                return err
            });
    }

    return (
        <div className="main">
            <div className="submenu">
                <Link to="/profile">
                    <img className="back" src={back} alt="volver" />
                </Link>
                <Logout />
            </div>

            {msg === withoutAppointment
                ?
                <>
                    <div className="divFormNewAppointment">
                        <form className="formNewAppointment" action="" onSubmit={handleSubmit}>
                            <h3>Reservar una cita</h3>
                            <div>Tipo:</div>
                            <select name="type" required>
                                <option value="">Tipo de cita</option>
                                <option value="Comunión">Comunión</option>
                                <option value="Embarazo">Embarazo</option>
                                <option value="Cumpleaños">Cumpleaños</option>
                                <option value="Recién nacido">Recién nacido</option>
                                <option value="Seguimiento">Seguimiento</option>
                            </select>
                            <div>Observaciones (edad nin@...):</div>
                            <textarea name="observations" rows="6"></textarea>
                            <div>Citas disponibles:</div>
                            <select name="DateappointmentId" size="6" required>
                                <option disabled value="">Elige una fecha</option>
                                {availableDates?.map(date =>
                                    <option key={date.id} value={date.id}>{moment(date.date).format('dddd, L, [ a las ] h:mm A')}</option>
                                )}
                            </select>
                            <div className="divButton">
                                <button>Crear cita</button>
                            </div>
                        </form>
                    </div>
                </>
                :
                <>
                    <div className="divFormNewAppointment">
                        <div className="formNewAppointment">
                            <h3>Cita reservada</h3>
                            <div>{msg}</div>
                            <div>Aviso: Solo puedes tener una cita</div>
                            <div className="divButtonDelete">
                                <button onClick={canceledAppointment}>Eliminar cita actual</button>
                            </div>
                        </div>
                    </div>
                </>
            }
            <div></div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(Appointments);