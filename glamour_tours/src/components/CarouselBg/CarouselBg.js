import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselBg.css';

import slide1 from '../../assets/images/1.jpg';
import slide2 from '../../assets/images/2.jpeg';
import slide3 from '../../assets/images/3.jpg';
import slide4 from '../../assets/images/4.jpeg';

const carouselBg = (props) =>{

  return (
      <Carousel className="carouselBg" controls={false} indicators={false} interval={9000}>
      <Carousel.Item className="carouselItem1">
        <img
          className="carouselImg"
          src={slide2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carouselItem2">
        <img
          className="carouselImg"
          src={slide1}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carouselItem3">
        <img
          className="carouselImg"
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carouselItem4">
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
