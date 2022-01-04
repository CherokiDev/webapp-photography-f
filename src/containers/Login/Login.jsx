import axios from 'axios';
import { Link, useHistory, Router, Route } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types/userType';
import Swal from 'sweetalert2';
import './Login.scss'
import loading from '../../img/loading.svg';
import { login, startGoogleLogin, startLoginEmailPassword } from '../../redux/actions/auth';
import Profile from '../Profile/Profile';
import { finishLoading, startLoading } from '../../redux/actions/ui';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth';
import { googleAuthProvider } from '../../utils/firebaseConfig';

const Login = (props) => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui)
    const history = useHistory();
    const [isLoading, setIsLoading] = React.useState(false);
    const auth = getAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        // cheroki - Esta función debería de estar en el archivo auth.js, pero necesito usar
        // el hook useHistory, y fuera de un componente de React no se usarlo
        const startLoginEmailPassword = (email, password) => {
            return (dispatch) => {
                dispatch(startLoading());
                signInWithEmailAndPassword(auth, email, password)
                    .then(({ user }) => {
                        dispatch(login(user.uid, user.displayName));
                        Swal.fire({
                            showConfirmButton: false,
                            timer: 2000,
                            timerProgressBar: true,
                            icon: 'success',
                            text: 'Sesión iniciada correctamente'
                        });
                        setTimeout(() => {
                            history.push('/profile')
                        }, 1500);
                        dispatch(finishLoading());
                    })
                    .catch(() => {
                        Swal.fire({
                            showConfirmButton: true,
                            icon: 'error',
                            text: 'Ha habido un error. Puede ser que hayas introducido mal algún dato, o que todavía no hayas creado una cuenta.'
                        })
                        dispatch(finishLoading())
                    })

            }
        }

        dispatch(startLoginEmailPassword(userData.email, userData.password))

    }

    // cheroki - Esta función debería de estar en el archivo auth.js, pero necesito usar
    // el hook useHistory, y fuera de un componente de React no se usarlo
    const startGoogleLogin = () => {
        return (dispatch) => {
            dispatch(startLoading());
            signInWithPopup(auth, googleAuthProvider)
                .then(({ user }) => {
                    Swal.fire({
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                        icon: 'success',
                        text: 'Sesión iniciada correctamente'
                    });
                    dispatch(login(user.uid, user.displayName));
                    setTimeout(() => {
                        history.push("/profile")
                    }, 500);
                    dispatch(finishLoading());

                })
                .catch(e => {
                    console.log(e)
                    dispatch(finishLoading())
                })
        }
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <div className="main">
            <form className="mainContainer" action="" onSubmit={handleSubmit}>
                <h3>Iniciar sesión</h3>
                <div>Correo electrónico:</div>
                <input type="email" name="email" placeholder="Introduce tu email" required />
                <div>Contraseña:</div>
                <input type="password" name="password" placeholder="Introduce tu contraseña" required />
                {/* <div className="divButton"> */}

                <button
                    type="submit"
                    disabled={loading}
                >
                    Iniciar sesión
                </button>
                <button
                    disabled={loading}
                    onClick={handleGoogleLogin}
                >
                    Iniciar sesión con Google
                </button>

                <div>¿Todavía no tienes cuenta?</div>
                <div><Link to="/register">Crear una cuenta nueva</Link></div>
                <br />
                {/* <div>¿Has olvidado tu contraseña? <Link to="/forgotpassword">Pulsa aquí</Link></div> */}
                {/* </div> */}
            </form>
        </div>
    )
}

export default connect()(Login);