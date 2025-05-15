import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import ayur1 from "../assets/ayur.jpg";
import ayur2 from "../assets/ayurvedic_image.jpg";

const images = [ayur1, ayur2, ayur1, ayur2, ayur1, ayur2];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}>
        {images.map((each, index) => (
          <img
            key={index}
            style={{ width: "100%", height: "25rem" }}
            src={each}
          />
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
