import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LOGOUT } from '../../redux/types/userType';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Profile = (props) => {

    const history = useHistory();

    const [startDate, setStartDate] = useState(new Date());
    const [msg, setMsg] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        const dateData = {
            date: event.target.date.value
        }

        axios.post('http://localhost:3005/dateappointments/create', dateData)
        .then(() => {
            setMsg(`Cita creada`)
        }).catch(() => {
            setMsg(`Ha habido un error al intentar crear la cita`)
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
            <div>Perfil del administrador</div>
            <div>Crear nuevas citas</div>
            <form action="" onSubmit={handleSubmit}>
                <DatePicker
                    name="date"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    locale="es-ES"
                    showTimeSelect
                    timeFormat="p"
                    dateFormat="Pp"
                />
                <button>Crear cita</button>
                <div>{msg}</div>
            </form>

            <div>Citas creadas</div>
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