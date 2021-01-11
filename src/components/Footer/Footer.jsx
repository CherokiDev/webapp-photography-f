import React from 'react';
import './Footer.scss';
import fb from '../../img/logoFB.png';
import ig from '../../img/logoIG.png'

const Footer = () => {
    return (
        <div className="divFooter">
            <div className="leftFooter">
                <p>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/elbarquitodepapelfi/">
                        <img className="logoFB" src={fb} alt="facebook" />
                    </a>
                </p>
                <p>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/elbarquitodepapel_fi/">
                        <img className="logoIG" src={ig} alt="instagram" />
                    </a>
                </p>

            </div>
            <div className="centerFooter">
                <p>
                    © 2020-2021 El Barquito de Papel - Fotografía Infantil
                </p>
            </div>
            <div className="rightFooter">
                <p>
                    Hecha por <a target="_blank" rel="noreferrer" href="https://github.com/Cheroki84">Miguel Ángel Morato</a>
                </p>
            </div>
        </div>
    )
}

export default Footer;