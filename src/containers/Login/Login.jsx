import axios from 'axios';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types/userType';


const Login = (props) => {
    const history = useHistory();
    const [msg, setMsg] = useState("");

    const send = event => {
        event.preventDefault();

        const user = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        axios.post('http://localhost:3005/users/login', user)
            .then(res => {
                /* localStorage.setItem('user', JSON.stringify(res.data))
                localStorage.setItem('token', JSON.stringify(res.data.token)) */
                props.dispatch({ type: LOGIN, payload: res.data})
                setMsg(`Bienvenid@`)
                setTimeout(() => {
                    history.push('/')
                }, 2000)
            }).catch(err => {
                setMsg(`Hubo un error al intentar iniciar sesión`)
            });
    }

    return (
        <>
            <form action="" onSubmit={send}>
                <input type="email" name="email" placeholder="Introduce tu correo electrónico" />
                <input type="password" name="password" placeholder="Introduce tu contraseña" />
                <button type="submit">Login</button>
                <div>{msg}</div>
            </form>
        </>
    )
}
export default connect()(Login);