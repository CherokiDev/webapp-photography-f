import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

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
            await axios.get('http://localhost:3005/appointments/byUserId/' + props.user.id, {
                headers: {
                    Authorization: "Bearer " + checkToken
                }
            })
                .then((res) => {
                    if (!res.data.UserId) {
                        setMsg(withoutAppointment)
                    } else {
                        axios.get('http://localhost:3005/dateappointments/getById/' + res.data.DateappointmentId)
                            .then((res) => {
                                setMsg(`Tienes una cita para la fecha ${res.data.date}`)
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
        await axios.put('http://localhost:3005/dateappointments/update/' + dataAppointment.DateappointmentId, statusAppointment)
            .then(() => {
                axios.delete('http://localhost:3005/appointments/delete/' + dataAppointment.id, {
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
        await axios.get('http://localhost:3005/dateappointments/availableDates')
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

        axios.post('http://localhost:3005/appointments/create', appointmentsData, {
            headers: {
                Authorization: "Bearer " + checkToken
            }
        })
            .then((res) => {
                axios.put('http://localhost:3005/dateappointments/update/' + appointmentsData.DateappointmentId, statusAppointment)
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
        <>
            <div>Citas</div>
            <div>{msg}</div>
            {msg === withoutAppointment
                ?
                <form action="" onSubmit={handleSubmit}>
                    <p>Formulario de citas</p>
                    <p>Tipo</p>
                    <select name="type" required>
                        <option value="">Tipo de cita</option>
                        <option value="Recién nacido">Recién nacido</option>
                        <option value="Comunión">Comunión</option>
                        <option value="Seguimiento">Seguimiento</option>
                    </select>
                    <p>Observaciones</p>
                    <textarea name="observations" cols="30" rows="10"></textarea>
                    <p>Citas disponibles</p>

                    <select name="DateappointmentId" size="5" required>
                        {availableDates?.map(date =>
                            <option key={date.id} value={date.id}>{date.date}</option>
                        )}
                    </select>
                    <div></div>
                    <button type="submit">Crear cita</button>
                </form>
                :
                <>
                    <div>Solo puedes tener una cita</div>
                    <button onClick={canceledAppointment}>Eliminar cita actual</button>
                </>
            }
            <div></div>


            <button><Link to="/profile">Volver</Link></button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(Appointments);