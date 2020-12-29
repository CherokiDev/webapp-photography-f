import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { regExFullName, regExEmail, regExPassword, regExPhone } from '../../lib/regEx';

const Register = () => {
    const history = useHistory();

    const handleSubmit = event => {
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

        axios.post(process.env.REACT_APP_API_URL + '/users/register', userData)
            .then(() => {
                Swal.fire({
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    icon: 'success',
                    text: 'Registro completado satisfactoriamente'
                })
                setTimeout(() => {
                    history.push('/login')
                }, 1500)
            }).catch(() => {
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'error',
                    text: 'Ha habido un error al intentar crear el registro'
                })
            });
    }

    return (
        <>
            <form className="mainContainer" action="" onSubmit={handleSubmit}>
                <h3>Creación de cuenta nueva</h3>
                <div>Nombre:*</div>
                <input type="text" name="firstname" placeholder="Introduce tu nombre" required />
                <div>Apellidos:*</div>
                <input type="text" name="lastname" placeholder="Introduce tus apellidos" required />
                <div>Correo electrónico:*</div>
                <input type="email" name="email" placeholder="Introduce tu email" required />
                <div>Contraseña:*</div>
                <input type="password" name="password" placeholder="Introduce tu password" required />
                <div>Teléfono:*</div>
                <input type="text" name="phone" placeholder="Introduce tu teléfono" required />
                <div>Código postal:</div>
                <input type="text" name="postalcode" placeholder="Introduce tu código postal" />
                <div>Ciudad:</div>
                <input type="text" name="city" placeholder="Introduce tu ciudad" />
                <div className="divButton">
                    <button type="submit">Registrarse</button>
                </div>
            </form>
        </>
    )
}

export default Register;