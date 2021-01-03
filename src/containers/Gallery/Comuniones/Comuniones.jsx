import React from 'react';
import Gallery from 'react-grid-gallery';

const IMAGES = [
    {
        src: "http://drive.google.com/uc?export=view&id=1W8i7dJdrkte4li8sNDjgXZWAxRBULTY7",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1LOy62SfZfIkPC_6xyisdMpdMOYrIfaQ6",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=15OXMAiEjhviYTrdQmlGZhVChyi6L-14x",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1PLqaL4tvaY_ytBU8aM9teBti3340x7Fi",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1KZat_5uXHHRMfPg5jrJcux0ZzdLcK2Dq",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1wqb1pJamdVUupF4B3xXmHC44P_glrmvL",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1_Hf26KKam_a0m94vRv96WHOro2GXbGmI",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1_phCzJ-BE-DPG9wweci_scNFHZf9ocnL",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1Sa67qNeo7wkpwrINM303VsnECId0sTTT",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1J_WKGURyHbrKLMmaAkSWJbQBLP25_TSi",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }
];



const Comuniones = () => {

    return (
        <div className="main">
            <div className="mainContainerGallery">
                <h3>Comuniones</h3>
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

export default Comuniones;