import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Carousel from 'react-bootstrap/Carousel';

export function Hcarousel() {
  return (
      <Carousel id='carousel-home'>
      <Carousel.Item>
        <video
          className="video-section"
          loop
          muted
          autoPlay
          >
            <source src="./misc_img/hero.mp4" type="video/mp4" />
        </video>
        <Carousel.Caption>
          <h3>Christmas in Cork</h3>
          <p>See the best of Cork</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./cian/christmas2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Christmas in Cork</h3>
          <p>See the best of Cork</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default Hcarousel;