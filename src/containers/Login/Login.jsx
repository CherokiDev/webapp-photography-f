import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types/userType';
import Swal from 'sweetalert2';
import './Login.scss'
import loading from '../../img/loading.svg';
import { startGoogleLogin, startLoginEmailPassword } from '../../redux/actions/auth';

const Login = (props) => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui)
    const history = useHistory();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        dispatch(startLoginEmailPassword(userData.email, userData.password))

        // setIsLoading(true);
        // await axios.post(process.env.REACT_APP_API_URL + '/users/login', userData)
        //     .then(res => {
        //         setIsLoading(false)
        //         props.dispatch({ type: LOGIN, payload: res.data })
        //         Swal.fire({
        //             showConfirmButton: false,
        //             timer: 3000,
        //             timerProgressBar: true,
        //             icon: 'success',
        //             text: 'Sesión iniciada correctamente'
        //         })

        //         setTimeout(() => {
        //             history.push('/')
        //         }, 1500)
        //     }).catch(err => {
        //         setIsLoading(false)
        //         Swal.fire({
        //             showConfirmButton: true,
        //             icon: 'error',
        //             text: 'Ha habido un error. Puede ser que hayas introducido mal algún dato, o que todavía no hayas creado una cuenta.'
        //         })
        //     });
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <div className="main">
            <form className="mainContainer" action="" onSubmit={handleSubmit}>
                <h3>Inicio de sesión</h3>
                <div>Correo electrónico:</div>
                <input type="email" name="email" placeholder="Introduce tu email" required />
                <div>Contraseña:</div>
                <input type="password" name="password" placeholder="Introduce tu contraseña" required />
                {/* <div className="divButton"> */}

                <button
                    type="submit"
                    disabled={loading}
                >Iniciar sesión
                </button>
                <button
                    disabled={loading}
                    onClick={handleGoogleLogin}>
                    Iniciar sesión con Google
                </button>

                <div>¿Todavía no tienes cuenta?</div>
                <div><Link to="/register">Crear una cuenta nueva</Link></div>
                <br />
                <div>¿Has olvidado tu contraseña? <Link to="/forgotpassword">Pulsa aquí</Link></div>
                {/* </div> */}
            </form>
        </div>
    )
}

export default connect()(Login);