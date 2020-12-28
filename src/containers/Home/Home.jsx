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
    src: 'http://drive.google.com/uc?export=view&id=1aq3VIae6SLuQalBQ1dWgkKijCTPUNcM2',
    altText: 'Recién nacido',
    caption: 'Recién nacido'
  },
  {
    src: 'http://drive.google.com/uc?export=view&id=1yGG0RHVDOlpMZ7tBHwQsG8W-09yteMkf',
    altText: 'Embarazos',
    caption: 'Embarazos'
  },
  {
    src: 'http://drive.google.com/uc?export=view&id=1jeco2A99wrhb9wABSTxFWqRNS5bPTmp7',
    altText: 'Comuniones',
    caption: 'Comuniones'
  },
  {
    src: 'http://drive.google.com/uc?export=view&id=1_orb53XqWDZYu36IzeCoFq8JA2zxDw_5',
    altText: 'Cumpleaños',
    caption: 'Cumpleaños'
  },
  {
    src: 'http://drive.google.com/uc?export=view&id=1fe5P5hP6bLkmAWXXRWAD9WL-L31T7pbv',
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
        <img src={item.src} alt={item.altText} width="100%"/>
        <CarouselCaption /* captionText={item.caption} */ captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
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
  );
}

export default Home;