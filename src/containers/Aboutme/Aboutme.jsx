import React from 'react';
import './Aboutme.scss'

const Aboutme = () => {
    return (
        <div className="main">
            <div className="aboutMeMainContainer">
                <h3>Sobre mí</h3>
                <div className="aboutMeRows">
                    <div className="aboutMePhoto">
                        photo
                    </div>
                    <div className="aboutMeText">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quasi facere laudantium doloremque placeat dolores officia blanditiis aliquam, debitis eligendi incidunt quam? Perferendis sunt earum voluptas amet, minus fuga vel.
                        </p>
                    </div>
                </div>
                <div className="aboutMeRows">
                    <div className="aboutMeText">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus veniam esse nam laudantium, ipsum sit maiores aperiam omnis, eius molestias modi dolores quisquam neque numquam repudiandae, quas dignissimos consequuntur?
                        </p>
                    </div>
                    <div className="aboutMePhoto">
                        photo
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutme;