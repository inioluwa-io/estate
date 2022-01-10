import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as RCarousel } from "react-responsive-carousel";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const Carousel = () => (
  <RCarousel dynamicHeight ={true}>
    <div>
      <img src={img1} alt="carousel" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src={img2} alt="carousel" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src={img3} alt="carousel" />
      <p className="legend">Legend 3</p>
    </div>
  </RCarousel>
);

export default Carousel;
