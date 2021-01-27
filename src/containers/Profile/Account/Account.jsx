import axios from 'axios';
import React, { useState } from 'react';
import { regExEmail, regExFullName, regExPassword, regExPhone } from '../../../lib/regEx';
import loading from '../../../img/loading.svg';
import Swal from 'sweetalert2';
import { Link, useHistory } from 'react-router-dom';
import Logout from '../../../components/Logout/Logout';
import { connect } from 'react-redux';
import { LOGOUT } from '../../../redux/types/userType';
import back from '../../../img/return150px.png';

const Account = (props) => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const checkToken = props.user.token;

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            email: event.target.email.value,
            password: event.target.password.value,
            phone: event.target.phone.value,
            postalcode: event.target.postalcode.value,
            city: event.target.city.value,
        };

        if (!regExFullName.test(userData.firstname)) {
            Swal.fire({
                showConfirmButton: true,
                icon: 'error',
                text: 'El formato del nombre no es válido. No puede contener números'
            })
            return;
        } else if (!regExFullName.test(userData.lastname)) {
            Swal.fire({
                showConfirmButton: true,
                icon: 'error',
                text: 'El formato del apellido no es válido. No puede contener números'
            })
            return;
        } else if (!regExEmail.test(userData.email)) {
            Swal.fire({
                showConfirmButton: true,
                icon: 'error',
                text: 'El formato del correo electrónico no es válido.'
            })
            return;
        } else if (!regExPassword.test(userData.password)) {
            Swal.fire({
                showConfirmButton: true,
                icon: 'error',
                text: 'La contraseña debe contener al menos: entre 8 y 16 caracteres, 1 número, 1 letra minúscula, 1 letra mayúscula y 1 carácter especial'
            })
            return;
        } else if (!regExPhone.test(userData.phone)) {
            Swal.fire({
                showConfirmButton: true,
                icon: 'error',
                text: 'El formato del teléfono no es válido.'
            })
            return;
        }

        setIsLoading(true);
        await axios.get(process.env.REACT_APP_API_URL + '/users/userbyid/' + props.user.id, {
            headers: {
                Authorization: "Bearer " + checkToken
            }
        })
            .then(() => {
                axios.put(process.env.REACT_APP_API_URL + '/users/update/' + props.user.id, userData)
                setIsLoading(false);
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'success',
                    text: 'Datos actualizados satisfactoriamente. Es necesario volver a iniciar sesión'
                })
                setTimeout(() => {
                    props.dispatch({ type: LOGOUT, payload: {} });
                    history.push('/profile')
                }, 1500)
            }).catch(() => {
                setIsLoading(false)
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'error',
                    text: 'Ha habido un error al intentar actualizar los datos'
                })
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
            <form className="mainContainer" action="" onSubmit={handleSubmit}>
                <h3>Actualizar info</h3>
                <p>AVISO: Es obligatorio volver a introducir la contraseña.</p>
                <div>Nombre:*</div>
                <input type="text" name="firstname" defaultValue={props.user.firstname} required />
                <div>Apellidos:*</div>
                <input type="text" name="lastname" defaultValue={props.user.lastname} required />
                <div>Correo electrónico:*</div>
                <input type="email" name="email" defaultValue={props.user.email} required />
                <div>Contraseña:*</div>
                <input type="password" name="password" placeholder="Introduce tu contraseña" required />
                <div>Teléfono:*</div>
                <input type="text" name="phone" defaultValue={props.user.phone} required />
                <div>Código postal:</div>
                <input type="text" name="postalcode" defaultValue={props.user.postalcode} />
                <div>Ciudad:</div>
                <input type="text" name="city" defaultValue={props.user.city} />
                <div className="divButton">
                    {isLoading
                        ?
                        <div className="loadingImage">
                            <img src={loading} alt="loading" />
                        </div>
                        :
                        <button type="submit">Enviar</button>
                    }
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(Account);