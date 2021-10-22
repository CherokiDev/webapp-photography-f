import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss'
import Logout from '../../components/Logout/Logout'

const Profile = () => {

    return (
        <div className="main">
            <Logout />
            <div className="buttons">
                {/* <button><Link to="/profile/account">Modificar mi cuenta</Link></button>
                <button><Link to="/profile/appointments">Gestionar mi cita</Link></button> */}
            </div>
        </div>
    )
}

export default Profile;