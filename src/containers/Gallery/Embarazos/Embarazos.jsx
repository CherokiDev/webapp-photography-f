import React from 'react';
import Gallery from 'react-grid-gallery';

const IMAGES = [
    {
        src: "http://drive.google.com/uc?export=view&id=15ebSyCpIkC2uSe9TyyCL99gxx_OYzwX3",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=17M16vLVOtBsclfcUhfwSRcYgAfLBRsDB",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1ZFJQM_mEQ4VFPzETMzVOkOdOusMJORjK",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=10Oq1sGVSay3tdu9AR8qJcaWOOW4HWw-u",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1Pf90mm5VVpdwLdn4rIK4y7ME73mwgPIc",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1S6DKxN-LN4xzqGf3UMXP1bBuwXUY50A7",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=10S-JMj-2u0e5MaCJpLhlBqvehVxtjx45",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1ytTAFRLYcqiewhdNrCK07MdSRh1SVplT",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1mUIEoeyPaMnsAtbvMUqJnF1jeOVMa5AW",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1ua7LUhM7UUAzo5Y_g_egnLxYAJtMYyUT",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }
];



const Embarazos = () => {

    return (
        <div className="main">
            <div className="mainContainerGallery">
                <h3>Embarazos</h3>
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

export default Embarazos;