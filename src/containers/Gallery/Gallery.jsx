import React from 'react';
import './Gallery.scss';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className="main">
            <div className="mainContainerGallery">
                <h3>Galería</h3>
                <div className="rows">
                    <Link to="/gallery/reciennacido">
                        <div className="divs divRecienNacido">
                            <p>Recién nacido</p>
                        </div>
                    </Link>
                    <Link to="/gallery/embarazos">
                        <div className="divs divEmbarazos">
                            <p>Embarazos</p>
                        </div>
                    </Link>
                    <Link to="/gallery/cumples">
                        <div className="divs divCumpleaños">
                            <p>Cumpleaños</p>
                        </div>
                    </Link>
                    <Link to="/gallery/comuniones">
                        <div className="divs divComuniones">
                            <p>Comuniones</p>
                        </div>
                    </Link>
                    <Link to="/gallery/seguimientos">
                        <div className="divs divSeguimientos">
                            <p>Seguimientos</p>
                        </div>
                    </Link>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;