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
import DataTable from 'react-data-table-component';
import back from '../../../img/return150px.png'
moment.locale('es')

const Profile = (props) => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [msg, setMsg] = useState("");
    const [appointments, setAppointments] = useState([]);
    const [allDates, setAllDates] = useState([]);
    const checkToken = props.user.token;
    /* const reserved = ("Reservada"); */

    const columnsAppointmentCreated = [
        {
            name: 'ID',
            selector: 'id',
            sortable: true
        },
        {
            name: 'Estado',
            selector: 'status',
            sortable: true
        },
        {
            name: 'Fecha',
            selector: 'date',
            format: row => {
                return moment(row.date).format('dddd, L, h:mm A')
            },
            sortable: true,
            center: true,
            grow: 3
        },
        {
            name: 'Acción',
            cell: (appointment) => <button className="deleteButton" onClick={() => deleteAppointment(appointment)}>Borrar cita</button>

        }
    ]

    const columnsAllDates = [
        {
            name: 'Tipo',
            selector: 'type',
            sortable: true
        },
        {
            name: 'Observaciones',
            selector: 'observations'
        },
        {
            name: 'Nombre',
            selector: 'User.firstname'
        },
        {
            name: 'Apellidos',
            selector: 'User.lastname'
        },
        {
            name: 'Email',
            selector: 'User.email'
        },
        {
            name: 'Teléfono',
            selector: 'User.phone'
        },
        {
            name: 'Fecha de la cita',
            selector: 'Dateappointment.date',
            format: row => {
                return moment(row.Dateappointment.date).format('L, h:mm A')
            },
            grow: 2
        }
    ]

    const paginationOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos'
    }

    const customStyle = {
        cells: {
            style: {
                display: 'flex',
                color: 'blue'

            }
        }
    }



    const handleSubmit = event => {
        event.preventDefault();

        const dateData = {
            date: event.target.date.value
        }

        axios.post(process.env.REACT_APP_API_URL + '/dateappointments/create', dateData)
            .then((res) => {
                setMsg(`Cita número ${res.data.dateappointment.id} creada correctamente`)
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
            <div className="submenu">
                <Link to="/adminprofile">
                    <img className="back" src={back} alt="volver" />
                </Link>
                <Logout />
            </div>
            <div>
                <h4>Citas creadas</h4>
                <DataTable
                    columns={columnsAppointmentCreated}
                    data={appointments}
                    pagination
                    paginationComponentOptions={paginationOptions}
                    fixedHeader
                    fixedHeaderScrollHeight="20em"
                    customStyles={customStyle}
                />
            </div>
            <p></p>
            <div className="formDatePicker">
                <h4>Crear una cita nueva</h4>
                <form action="" onSubmit={handleSubmit}>
                    <DatePicker
                        name="date"
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        showTimeSelect
                        timeFormat="p"
                        dateFormat="Pp"
                    />
                    <div className="buttons">
                        <button>Crear cita</button>
                    </div>
                </form>
            </div>
            <p></p>
            <div>
                <h4>Citas reservadas</h4>
                <DataTable
                    columns={columnsAllDates}
                    data={allDates}
                    pagination
                    paginationComponentOptions={paginationOptions}
                    fixedHeader
                    fixedHeaderScrollHeight="20em"
                    customStyles={customStyle}
                />
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(Profile);