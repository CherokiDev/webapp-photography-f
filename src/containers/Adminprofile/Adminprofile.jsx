import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../components/Logout/Logout';

const Adminprofile = () => {

    return (
        <>
            <Logout />
            <div className="buttons">
                <button><Link to="/adminprofile/adminappointments">Gestionar las citas</Link></button>
            </div>
        </>
    )
}

export default Adminprofile;