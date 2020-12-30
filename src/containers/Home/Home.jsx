import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import './Home.scss'

const items = [
    {
        src: 'http://drive.google.com/uc?export=view&id=1RrfZiJLm2aVoGzULRM1wvmkJLRac8tNC',
        altText: 'Recién nacido',
        caption: 'Recién nacido'
    },
    {
        src: 'http://drive.google.com/uc?export=view&id=10xjzE5ugJYMUa5ky3ZjJu7S2O_TwdUj8',
        altText: 'Embarazos',
        caption: 'Embarazos'
    },
    {
        src: 'http://drive.google.com/uc?export=view&id=1sdDBmSVTKhhYthcUwlFog_YYk4qS0JfK',
        altText: 'Comuniones',
        caption: 'Comuniones'
    },
    {
        src: 'http://drive.google.com/uc?export=view&id=1HrQVPN8l9RC-gaSknb4uZN0d3J2jvsUa',
        altText: 'Cumpleaños',
        caption: 'Cumpleaños'
    },
    {
        src: 'http://drive.google.com/uc?export=view&id=1SR7t5Rq2iBIVMjOkU5ZirnZB7UPRGLdZ',
        altText: 'Seguimiento',
        caption: 'Seguimiento'
    }
];

const Home = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} width="100%" />
                <CarouselCaption /* captionText={item.caption} */ captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <div className="main">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default Home;