import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselBg.css';

import slide1 from '../../assets/images/a.jpg';
import slide2 from '../../assets/images/e.jpg';
import slide3 from '../../assets/images/c.jpg';
import slide4 from '../../assets/images/f.jpg';

const carouselBg = (props) =>{

  return (
      <Carousel className="carouselBg" controls={false} indicators={false} interval={9000}>
      <Carousel.Item>
        <img
          className="carouselImg"
          src={slide2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg"
          src={slide1}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg"
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg"
          src={slide4}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default carouselBg;
