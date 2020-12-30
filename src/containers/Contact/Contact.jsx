import React from 'react';
import './Contact.scss'
import Iframe from 'react-iframe';
import fb from '../../img/logoFB.png';
import ig from '../../img/logoIG.png';

const Contact = () => {
    return (
        <div className="main">
            <div className="contactMainContainer">
                <h3>Contacto</h3>
                <div className="contactText">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo aperiam porro facilis in fugiat rem doloribus animi odit, repellendus natus ipsum, dolore est voluptate itaque accusantium, laboriosam molestias accusamus recusandae!
                    </p>
                </div>


                <div className="contactDivInfo">
                    <div className="contactPhone">
                        <p><b>Teléfono:</b> <br />
                        +34 635 92 93 95
                        </p>

                    </div>
                    <div className="contactEmail">
                        <p><b>Email</b> <br />
                        elbarquitodepapelfi@gmail.com
                        </p>
                    </div>
                    <div className="contactAddress">
                        <p><b>Dirección</b></p>
                        <p>CL. Cristóbal Colón - Núm 17 <br />
                            Puerto Serrano (Cádiz)
                        </p>

                    </div>
                    <div className="contactMap">
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.7722318637684!2d-5.542444884364584!3d36.919709868662395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0d6fddc08f3d91%3A0x5b473a92b188ef2c!2sEl%20Barquito%20de%20Papel%20-%20fotograf%C3%ADa%20infantil!5e0!3m2!1ses!2ses!4v1609322411869!5m2!1ses!2ses"
                            id="myId"
                            className="map"
                        />
                    </div>

                </div>

                <div className="contactFollow">
                    <p>
                        <b>
                            Puedes seguirme en:
                        </b>
                    </p>
                </div>

                <div className="contactDivLinks">
                    <div>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/elbarquitodepapelfi/">
                            <img className="logoFB" src={fb} alt="facebook" />
                        </a>
                    </div>
                    <div>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/elbarquitodepapel_fi/">
                            <img className="logoIG" src={ig} alt="instagram" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;