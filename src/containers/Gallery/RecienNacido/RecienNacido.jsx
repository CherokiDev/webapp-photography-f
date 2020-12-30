import React from 'react';
import Gallery from 'react-grid-gallery';
import './RecienNacido.scss';

const IMAGES = [
    {
        src: "http://drive.google.com/uc?export=view&id=1Ak5_KuUwA_G2Rf0ezsU39bhrvfAwfbBC",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1ReFpjUSFTsXAa-YNW1ZBtmqrj8bXeeoA",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1QPLku45hdvGV6qozcc-5mQzHum1DIKyT",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=13j9j4nar6D0-u7_cG5PtItOdLbbLM0mq",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },

    {
        src: "http://drive.google.com/uc?export=view&id=1o3TBYee6PU2KlX10EBE7xm7qr7hDC8gI",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1zV0gcrHvmluC6OaDUNJq9PDWje0nvKjC",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1n40TmlObjv1M2MCBNzzVqH5GBphHJ0Rz",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1bVgcadXipzg8sVDupuMTi-WlZBClun2R",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1pSYVJq9HMmEq7OoNu_PXep5HVSi8Bn2v",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1h0uR9KDINELTje6JofWRki1yvInkAiGH",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },

    {
        src: "http://drive.google.com/uc?export=view&id=1gfwzdtxZMP2FaajWtxAUVdX6w4-DN00F",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1JlEmKCEVQXKRxIOTJP7OvDdyi7PApQD1",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1P3RXhJcos7pqsC95XonQTZ6WTs4GgW7t",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1HNfZgFHuClLiQuMyJmstm_TT6fDeyYzp",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=18v5lupfoILK1k__1HCiUEbcU7GgCvlQ9",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1pQQVn8PoTrba61zBs6aDiG5s-ybUUrrW",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },

    {
        src: "http://drive.google.com/uc?export=view&id=1ga9ELb9H3sB_Zcz06pL4bc2O5ZOx_bzM",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1a7CHOHPSNipeLP5pSjSn0fDYkL0trtRO",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=13_HmxHzNiZKVwhGRR6hHvG1lKQcXTWgR",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1Zud4BHIz6x0mic1ZJHk0CJlRM5eeFqKc",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=17LjH-N6__BfIKt30vQ_xwFwa6ZPmiZhz",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1HxrCNIvocBNdxLTUMHiNHyR6sOtGTauJ",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1hZ2H8L91GRVMk7BAS7IKj8NL50fZDOnv",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1nEulmRKwxjysZxT5EhFCYnqdJ55PczTB",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1EGDuw9ACCsf6KHYaAAOrBCUsRh7C6bJb",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1lQmPJ73guVkkgPp7zDe4V8YgBBa696cx",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1XOloZy_flRcbzlLsG4fU_BZd5FY642Da",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1WylUqlPq8RM-7-2jAub3kUOe6QCcBYmf",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://drive.google.com/uc?export=view&id=1L9x5XisPlzQvUyWTvTJ5XvWUCPkwRT6T",
        thumbnail:
            "http://drive.google.com/uc?export=view&id=1gVd69OWtaseV-rB0qpJnUel723lSAVBn",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }
];



const RecienNacido = () => {

    return (
        <div className="main">
            <div className="mainContainerGallery">
                <h3>Recién nacido</h3>
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

export default RecienNacido;