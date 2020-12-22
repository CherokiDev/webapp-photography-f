import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LOGOUT } from '../../redux/types/userType';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Profile = (props) => {

    const history = useHistory();

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [msg, setMsg] = useState("");
    const [appointments, setAppointments] = useState([]);
    const [allDates, setAllDates] = useState([])
    const checkToken = props.user.token

    const handleSubmit = event => {
        event.preventDefault();

        const dateData = {
            date: event.target.date.value
        }

        axios.post(process.env.REACT_APP_API_URL + '/dateappointments/create', dateData)
            .then((res) => {
                setMsg(`Cita ${res.data.dateappointment.date} creada correctamente`)
            }).catch(() => {
                setMsg(`Ha habido un error al intentar crear la cita`)
            });
    }

    const getAppointments = async () => {
        await axios.get(process.env.REACT_APP_API_URL + '/dateappointments/allDates')
            .then((res) => {
                setAppointments(res.data.dateappointments)
                return res;
            }).catch((err) => {
                return err;
            });
    }

    useEffect(() => {
        const getAll = async () => {
            await axios.get(process.env.REACT_APP_API_URL + '/appointments/allWithUserAndDate', {
                headers: {
                    Authorization: "Bearer " + checkToken
                }
            })
                .then((res) => {
                    setAllDates(res.data.appointments)
                    return res
                }).catch((err) => {
                    return err
                });
        }
        getAll()
        // eslint-disable-next-line
    }, [msg])


    const deleteAppointment = async (appointment) => {
        if (appointment.status === "Reservada") {
            await axios.delete(process.env.REACT_APP_API_URL + '/appointments/deleteByDateAppointmentId/' + appointment.id, {
                headers: {
                    Authorization: "Bearer " + checkToken
                }
            })
        }
        await axios.delete(process.env.REACT_APP_API_URL + '/dateappointments/delete/' + appointment.id)
            .then(() => {
                setMsg(`${Date.now()}. Cita borrada correctamente`)
            }).catch((err) => {
                return err;
            });
    }

    const logout = async () => {
        await axios.put(process.env.REACT_APP_API_URL + '/users/logout/' + props.user.email)
        props.dispatch({ type: LOGOUT, payload: {} });
        setTimeout(() => {
            history.push('/')
        }, 1000)
    }

    useEffect(() => {
        const allAppointments = async () => {
            await getAppointments()
        }
        allAppointments()
    }, [msg]);

    return (
        <>
            <div>Perfil del administrador</div>
            <div>Crear nuevas citas</div>
            <form action="" onSubmit={handleSubmit}>
                <DatePicker
                    name="date"
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    showTimeSelect
                    timeFormat="p"
                    dateFormat="Pp"
                />
                <button>Crear cita</button>
                <div>{msg}</div>
            </form>
            <div>Citas creadas</div>
            <div>
                {appointments?.map(appointment =>
                    <div key={appointment.id}>{appointment.status} --- {appointment.date} <button onClick={() => deleteAppointment(appointment)}>Borrar cita</button> </div>
                )}
            </div>
            <div>Tabla de citas reservadas</div>
            <div>
                {allDates?.map(date =>
                    <div key={date.id}>
                        <div>TIPO</div>
                        <div>{date.type}</div>
                        <div>OBSERVACIONES</div>
                        <div>{date.observations}</div>
                        <div>USUARIO</div>
                        <div>{date.User.firstname} --- {date.User.lastname} --- {date.User.email} --- {date.User.phone}</div>
                        <div>FECHA</div>
                        <div>{date.Dateappointment.date}</div>
                    </div>
                )}
            </div>

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