import React from "react";
import Cards from "./Cards";
import CustomNavbar from "./Navbar";

export default function Portfolio() {
  return (
    <div className="pure-dark ">
      <CustomNavbar />
      <div className="portifolio-container">
        <h2 className="Portifolio-selector">What would you like to see</h2>
        <div
          id="carouselExampleIndicators"
          className="carousel slide portifolio-selector-height"
        >
          <div className="carousel-indicators">
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
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item category-item active  text-center category-text-size">
              <p className="w-50 m-auto">All</p>
            </div>
            <div className="carousel-item category-item text-center category-text-size">
              <p className="w-50 m-auto">Branding</p>
            </div>
            <div className="carousel-item category-item  text-center category-text-size">
              <p className="w-50 m-auto">Videography</p>
            </div>
            <div className="carousel-item category-item  text-center category-text-size">
              <p className="w-50 m-auto">Social media</p>
            </div>
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
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
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <Cards />
      </div>
    </div>
  );
}
