import React from 'react';
import Gallery from 'react-grid-gallery';

const IMAGES = [
    {
        src: "http://drive.google.com/uc?export=view&id=1yP_6rL3bLGINXXentyxVzyXDV1NsulpF",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1JzJ993ww6fWHNvkFOIA3Oj49EHY6nQGs",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1raLAT031N1rbxw8-oItmiEfTDzZu8QZZ",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1EjXMBEeNqQIIq8n1ROCvAkTbOZRs41OS",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=15vvA233n60BAl0GfY_GL8AM4xIOgwlDg",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1c4k1XhuKluxNAwbNkZyX_4aJ--J5ZQHH",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }
];



const Cumple = () => {

    return (
        <div className="main">
            <div className="mainContainerGallery">
                <h3>Cumpleaños</h3>
                <div className="divGallery">

                    <Gallery
                        images={IMAGES}
                        enableLightbox={true}
                        backdropClosesModal
                        margin={10}
                        enableImageSelection={false}
                    // maxRows={4}
                    // currentImage={3}
                    // isOpen={ true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Cumple;