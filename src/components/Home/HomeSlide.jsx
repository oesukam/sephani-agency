import React from "react";
import { Slide } from "react-slideshow-image";
import slide1 from "../../assets/images/slide-1.jpg";
import slide2 from "../../assets/images/slide-2.jpg";
import slide3 from "../../assets/images/slide-3.jpg";
import slide4 from "../../assets/images/slide-4.jpg";
import slide5 from "../../assets/images/slide-5.jpg";
import "./HomeSlide.css";

const slideImages = [
  {
    title: "Education Needs Complete Solution",
    text: "Start learning today with us",
    image: slide1
  },
  {
    title: "Education Needs Complete Solution",
    text:
      "We help students reach their goals by placing them into schools they merit",
    image: slide2
  },
  {
    title: "Education Needs Complete Solution",
    text: "Start your journey with us",
    image: slide3
  },
  { title: "", text: "", image: slide4 },
  { title: "", text: "", image: slide5 }
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

const HomeSlide = () => {
  return (
    <Slide {...properties}>
      {slideImages.map((slide, index) => (
        <div className="each-slide" key={slide.text}>
          <div style={{ backgroundImage: `url(${slide.image})` }}>
            {slide.title || slide.text ? (
              <div className="slide-content">
                <h3>{slide.title}</h3>
                <h1>{slide.text}</h1>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </Slide>
  );
};

export default HomeSlide;
