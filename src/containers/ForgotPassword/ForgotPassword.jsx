import React, { useState } from 'react';
import axios from 'axios';
import loading from '../../img/loading.svg';
import Swal from 'sweetalert2';

const ForgorPassword = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userEmail = {
            email: e.target.email.value
        };

        setIsLoading(true);
        await axios.post(process.env.REACT_APP_API_URL + '/forgotpassword', userEmail)
            .then((res) => {
                setIsLoading(false)
                Swal.fire({
                    showConfirmButton: true,                    
                    icon: 'success',
                    text: 'Revise su email, se le ha enviado un enlace para crear una nueva contraseña'
                })
            }).catch((err) => {
                setIsLoading(false)
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'error',
                    text: 'Ha habido un error al intentar enviar los datos, comprueba el correo introducido o vuelva a intentarlo más tarde'
                })
            });
    }

    return (
        <div className="main">
            <form className="mainContainer" onSubmit={handleSubmit}>
                <h3>Recuperar cuenta</h3>
                <div>Correo electrónico:</div>
                <input type="email" name="email" placeholder="Introduce tu email" required />
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

export default ForgorPassword;