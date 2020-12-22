import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { regExFullName, regExEmail, regExPassword, regExPhone } from '../../lib/regEx';

const Register = () => {
    const history = useHistory();
    const [msg, setMsg] = useState("");

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
            setMsg('El formato del nombre no es válido')
            return;
        } else if (!regExFullName.test(userData.lastname)) {
            setMsg('El formato del apellido no es válido')
            return;
        } else if (!regExEmail.test(userData.email)) {
            setMsg('El formato del email no es válido')
            return;
        } else if (!regExPassword.test(userData.password)) {
            setMsg('El password debe contener al menos: entre 8 y 16 caracteres, 1 número, 1 letra minúscula, 1 letra mayúscula y 1 carácter especial')
            return;
        } else if (!regExPhone.test(userData.phone)) {
            setMsg('El formato del teléfono no es válido')
            return;
        }

        axios.post(process.env.REACT_APP_API_URL + '/users/register', userData)
            .then(() => {
                setMsg(`Registro completado`)
                setTimeout(() => {
                    history.push('/login')
                }, 1500)
            }).catch(() => {
                setMsg(`Ha habido un error al intentar crear el registro`)
            });
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="firstname" placeholder="Introduce tu nombre" required />
                <input type="text" name="lastname" placeholder="Introduce tus apellidos" required />
                <input type="email" name="email" placeholder="Introduce tu email" required />
                <input type="password" name="password" placeholder="Introduce tu password" required />
                <input type="text" name="phone" placeholder="Introduce tu teléfono" required />
                <input type="text" name="postalcode" placeholder="Introduce tu código postal" />
                <input type="text" name="city" placeholder="Introduce tu ciudad" />
                <button type="submit">Registrarse</button>
                <div>{msg}</div>
            </form>
        </>
    )
}

export default Register;