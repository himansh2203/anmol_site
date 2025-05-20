// ReviewSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/ayushlogo.svg";
import img2 from "../assets/our_manufacture_logo1.svg";
import img3 from "../assets/our_manufacture_logo2.svg";
import img5 from "../assets/our_manufacture_logo4.svg";

const images = [img1, img2, img3, img5];

const Certify = () => {
  const settings = {
    infinite: true,
    speed: 9000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Our Certifications</h3>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-3">
            <div
              className="card mx-auto text-center"
              style={{ maxWidth: "90%" }}
            >
              <img
                src={image}
                alt={`certification-${index}`}
                style={{
                  maxHeight: "80px",
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Certify;
