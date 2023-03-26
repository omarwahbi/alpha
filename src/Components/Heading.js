import React from "react";
import Laptop from "../Assets/laptop.svg";
import ServiceImg from "../Assets/ServiceImg.svg";
import GalleryImg from "../Assets/GalleryImg.svg";
import { Link } from "react-router-dom";

export default function Heading() {
  return (
    <div className="heading">
      <div className="container text-center">
        <div className="row">
          <div className="col col-sm-6 col-12">
            <div className="heading-text">
              <h1 className="alpha-text">
                ALPHA <hr className="alpha-line" />
              </h1>
              <h1>SOLUTIONS THAT</h1>
              <h1 className="purple-text ">MAKE YOU GROW</h1>
              <div className="get-started">
                <div className="get-started-container">
                  <Link to={"/services"} className="get-started-link">
                    <span className="purple-circle"></span>
                    <span className="get-started-text">Get Started</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-12">
            <img src={Laptop} className="laptop" alt="Laptop" />
          </div>
          <div className="col col-sm-6 col-12">
            <div className="img-container">
              <img src={ServiceImg} className="laptop" alt="service" />
              <div className="txt-container">
                <p>
                  OUR <br /> SERVICES
                </p>
              </div>
              <div className="gallery-link-container">
                <Link to={"/services"} className="gallery-link">
                  <span className="gallery-purple-circle"></span>
                  <span className="gallery-link-text">Visit the page</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-12">
            <div className="img-container">
              <img src={GalleryImg} className="laptop" alt="Gallery" />
              <div className="txt-container">
                <p>
                  THE <br /> GALLERY
                </p>
              </div>
              <div className="gallery-link-container">
                <Link to={"/portifolio"} className="gallery-link">
                  <span className="gallery-purple-circle"></span>
                  <span className="gallery-link-text">Visit the page</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
