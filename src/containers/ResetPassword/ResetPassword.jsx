import React, { useState } from 'react';
import axios from 'axios';
import loading from '../../img/loading.svg';
import Swal from 'sweetalert2';
import { regExPassword } from '../../lib/regEx';

const ResetPassword = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userPassword = {
            password: e.target.password.value
        }

        if (!regExPassword.test(userPassword.password)) {
            Swal.fire({
                showConfirmButton: true,
                icon: 'error',
                text: 'La contraseña debe contener al menos: entre 8 y 16 caracteres, 1 número, 1 letra minúscula, 1 letra mayúscula y 1 carácter especial como #, @, %.'
            })
            return;
        }

        setIsLoading(true);
        await axios.put(process.env.REACT_APP_API_URL + '/resetpassword/' + props.match.params.id + '/' + props.match.params.tokenresetpassword, userPassword, {
            where: {
                id: props.match.params.id,
                tokenresetpassword: props.match.params.tokenresetpassword
            }
        })
            .then((res) => {
                setIsLoading(false)
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'success',
                    text: 'Contraseña cambiada correctamente'
                })
            }).catch((err) => {
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'error',
                    text: 'Ha habido un error al intentar enviar los datos, vuelva a intentarlo más tarde'
                })
            });
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
        <div className="main" onSubmit={handleSubmit}>
            <form className="mainContainer">
                <h3>Nueva contraseña</h3>
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
                        <button type="submit">Enviar</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default ResetPassword;