import React from 'react';
import './AppWhatsapp.scss';
import whatsapp from '../../img/icon-whatsapp.png';

const AppWhatsapp = () => {
    return (
        <a className="appWhatsapp" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=34635929395">
            <img src={whatsapp} alt="icon whatsapp"/>
        </a>
    )
}

export default AppWhatsapp;