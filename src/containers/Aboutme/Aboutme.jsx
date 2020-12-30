import React from 'react';
import './Aboutme.scss'

const Aboutme = () => {
    return (
        <div className="main">
            <div className="aboutMeMainContainer">
                <h3>Sobre mí</h3>
                <div className="aboutMeRows">
                    <div className="photo1"></div>
                    <div className="text1"></div>
                </div>
                <div className="aboutMeRows">
                    <div className="text2"></div>
                    <div className="photo2"></div>
                </div>

            </div>
        </div>
    )
}

export default Aboutme;