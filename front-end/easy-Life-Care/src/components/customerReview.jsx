// ReviewSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Ramesh Kumar",
    text: "This product changed my life! Highly recommended.",
    rating: 5,
  },
  {
    name: "Md. Saif",
    text: "Great customer service and quality products.",
    rating: 4,
  },
  {
    name: "Ankit Rana",
    text: "Good value for money. Satisfied with the purchase.",
    rating: 4,
  },
  {
    name: "Ankur Rana",
    text: "Delivered on time and as expected. Will buy again.",
    rating: 5,
  },
  {
    name: "Farukh khan",
    text: "Good value for money. Satisfied with the purchase.",
    rating: 4,
  },
  {
    name: "Harsh Kaushik",
    text: "Delivered on time and as expected. Will buy again.",
    rating: 5,
  },
];

const ReviewSlider = () => {
  const settings = {
    infinite: true,
    speed: 9000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear", // makes it smooth and continuous
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Customer Reviews</h3>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-3">
            <div
              className="card mx-auto text-center"
              style={{ maxWidth: "90%" }}
            >
              <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <p className="card-text">{review.text}</p>
                <div>
                  {"⭐".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
