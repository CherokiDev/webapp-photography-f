import React from 'react';
import Gallery from 'react-grid-gallery';

const IMAGES = [
    {
        src: "http://drive.google.com/uc?export=view&id=1VyejGAhb3huRmBZSfwgOXk3qdrjefinH",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=12EqPI_lR61F-zyqklMbk85XmMolhi1Pb",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1b7Dy7Xkhhr20XGNk8EtldkSHgmifFaIO",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1pAqyEVD1YXtURmB3bIi7oW18VW8vuswF",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1Mv-cBWvxLq7iLRT-NXrVKJoulH2Qz73i",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1L7PS8ZDmPe5Wq6p0gEBohC-1pJQu6kT8",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1y40VbDL16a0q4PQUVwy86n2QE-m6lUWT",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1Uv-_K9yyeWtEjCebRqchVLxHJ_cAMRxH",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1I9abhsTTVzt68_5mSAYp6M9tc4U182Hr",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1bm6ozfjVK8JwsWnRhgyg60QvxiStMGFZ",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }
];



const Seguimientos = () => {

    return (
        <div className="main">
            <div className="mainContainerGallery">
                <h3>Seguimientos</h3>
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

export default Seguimientos;