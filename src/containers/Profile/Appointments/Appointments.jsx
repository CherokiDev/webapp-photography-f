import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'

const Appointments = (props) => {
    const [availableDates, setAvailableDates] = useState([])

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
                return res
            }).catch((err) => {
                return err
            });
    }

    return (
        <>
            <div>Citas</div>
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
                <textarea name="observations" id="" cols="30" rows="10"></textarea>
                <p>Citas disponibles</p>

                <select name="DateappointmentId" id="" size="5" required>
                    {availableDates?.map(date =>
                        <option key={date.id} value={date.id}>{date.date}</option>
                    )}
                </select>
                <div></div>
                <button type="submit">Enviar</button>
            </form>
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