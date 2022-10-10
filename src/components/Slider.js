/** @format */

import Carousel from "react-bootstrap/Carousel";

import "../styles/slider.css";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={null}>
        <img
          className='d-block w-100 carousel-img'
          src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
          alt='Coffee'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 carousel-img'
          src='https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
          alt='Rice'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 carousel-img'
          src='https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
          alt='Quinoa'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
