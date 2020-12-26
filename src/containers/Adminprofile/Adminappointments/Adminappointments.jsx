import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Logout from '../../../components/Logout/Logout'
import './Adminappointments.scss';
import moment from 'moment';
import 'moment/locale/es';
import Swal from 'sweetalert2';
moment.locale('es')

const Profile = (props) => {

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
                setMsg (`Cita número ${res.data.dateappointment.id} creada correctamente`)
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'success',
                    text: `Cita ${moment(res.data.dateappointment.date).format('[para el ] dddd, LL [ a las ] h:mm A')} creada correctamente`
                })
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

    useEffect(() => {
        const allAppointments = async () => {
            await getAppointments()
        }
        allAppointments()
    }, [msg]);

    return (
        <>
            <Logout />
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
                    <div key={appointment.id}>{appointment.status} --- {moment(appointment.date).format('dddd, LL [ a las ] h:mm A')} <button onClick={() => deleteAppointment(appointment)}>Borrar cita</button> </div>
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
                        <div>{moment(date.Dateappointment.date).format('dddd, LL [ a las ] h:mm A')}</div>
                    </div>
                )}
            </div>
            <button><Link to="/adminprofile">Volver</Link></button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(Profile);