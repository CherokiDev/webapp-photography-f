import React, { useState } from 'react';
import axios from 'axios';
import loading from '../../img/loading.svg';
import Swal from 'sweetalert2';

const ResetPassword = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userPassword = {
            password: e.target.password.value
        }

        setIsLoading(true);
        await axios.put('http://localhost:3005/resetpassword' + '/' + props.match.params.id + '/' + props.match.params.tokenresetpassword, userPassword, {
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
                
            });
    }

    return (
        <div className="main" onSubmit={handleSubmit}>
            <form className="mainContainer">
                <div>Introduce la nueva contraseña</div>
                <input type="password" name="password" />
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