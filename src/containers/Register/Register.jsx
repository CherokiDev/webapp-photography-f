import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { regExFullName, regExEmail, regExPassword, regExPhone } from '../../lib/regEx';
import loading from '../../img/loading.svg';
import './Register.scss'
import { useDispatch } from 'react-redux';
import { registerWithNameEmailPassword } from '../../redux/actions/auth';

const Register = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            firstname: event.target.firstname.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };

        if (!regExFullName.test(userData.firstname)) {
            Swal.fire({
                showConfirmButton: true,
                icon: 'error',
                text: 'El formato del nombre no es válido. No puede contener números'
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
                text: 'La contraseña debe contener al menos: entre 8 y 16 caracteres, 1 número, 1 letra minúscula, 1 letra mayúscula y 1 carácter especial como #, @, %.'
            })
            return;
        }

        dispatch(registerWithNameEmailPassword(userData.firstname, userData.email, userData.password))
        
    }

    const checkValidation = (e) => {
        const confirmPass = e.target.value;
        setConfirmPassword(confirmPass)
        if (password !== confirmPass) {
            setIsError("La contraseña no coincide");
        } else {
            setIsError("");
        }
    }

    const switchShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="main">
            <form className="mainContainer" action="" onSubmit={handleSubmit}>
                <h3>Crear cuenta nueva</h3>
                <div>Nombre:*</div>
                <input type="text" name="firstname" placeholder="Introduce tu nombre" required />
                {/* <div>Apellidos:*</div>
                <input type="text" name="lastname" placeholder="Introduce tus apellidos" required /> */}
                <div>Correo electrónico:*</div>
                <input type="email" name="email" placeholder="Introduce tu email" required />
                <div className="divPassword">Contraseña:*</div>
                <div className="containerPassword">
                    <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Introduce tu contraseña" required />
                    <button onClick={switchShowPassword}>{showPassword ? "Ocultar" : "Mostrar"}</button>
                </div>
                <div>Confirmar contraseña:*</div>
                <input type="password" value={confirmPassword} onChange={(e) => checkValidation(e)} name="confirmPassword" placeholder="Confirma la contraseña" required />
                <div className="confirmPassword">{isError}</div>
                <div className="divButton">
                    {isLoading
                        ?
                        <div className="loadingImage">
                            <img src={loading} alt="loading" />
                        </div>
                        :
                        <button type="submit">Registrarse</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default Register;