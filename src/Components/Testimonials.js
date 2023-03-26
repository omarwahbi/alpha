import React from "react";
import OurClints from "./OurClints";

export default function Testimonials() {
  return (
    <div className="container text-center">
      <div className="testimonials">
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-height"
          data-bs-interval="false"
        >
          <div className="carousel-indicators black-carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <h2 className="testimonials-text">Testimonials</h2>
            <div className="carousel-item active text-center">
              <p className="w-75 m-auto testimonial-txt">
                Et magnis dis parturient montes. Nunc vel risus commodo viverra
                maecenas accumsan lacus vel. Sollicitudin nibh sit amet commodo
                nulla facilisi nullam vehicula.
              </p>
            </div>
            <div className="carousel-item text-center">
              <p className="w-75 m-auto testimonial-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                lectus arcu bibendum at
              </p>
            </div>
            <div className="carousel-item text-center">
              <p className="w-75 m-auto testimonial-txt">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon black-carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon black-carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <OurClints />
    </div>
  );
}
