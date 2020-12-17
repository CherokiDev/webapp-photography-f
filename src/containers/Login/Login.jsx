import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types/userType';


const Login = (props) => {
    const history = useHistory();
    const [msg, setMsg] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        const userData = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        axios.post('http://localhost:3005/users/login', userData)
            .then(res => {
                props.dispatch({ type: LOGIN, payload: res.data })
                setMsg(`Bienvenid@`)
                setTimeout(() => {
                    history.push('/')
                }, 1500)
            }).catch(err => {
                setMsg(`Ha habido un error al intentar iniciar sesión`)
            });
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Introduce tu correo electrónico" required />
                <input type="password" name="password" placeholder="Introduce tu contraseña" required />
                <button type="submit">Login</button>
                <div>{msg}</div>
                <div>Todavía no tienes cuenta? <Link to="/register">Regístrate</Link></div>
            </form>
        </>
    )
}
export default connect()(Login);