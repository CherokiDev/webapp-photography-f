import React from 'react';
import './Gallery.scss';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <>
            <div className="mainContainerGallery">
                <h3>Galería</h3>
                <div className="rows">
                    <Link to="/">
                        <div className="divs divRecienNacido">
                            <p>Recién nacido</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="divs divEmbarazos">
                            <p>Embarazos</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="divs divCumpleaños">
                            <p>Cumpleaños</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="divs divComuniones">
                            <p>Comuniones</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="divs divSeguimientos">
                            <p>Seguimientos</p>
                        </div>
                    </Link>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Gallery;