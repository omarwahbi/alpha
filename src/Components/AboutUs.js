import React from "react";
import Logo from "../Assets/logo.svg";
import Badges from "../Assets/badges.svg";
import ScrollToTopButton from "./ScrollToTopBtn";
export default function AboutUs() {
  return (
    <div className="pure-dark ">
      <div className="container about-us-container">
        <div className="row">
          <div className="col-sm-8 about-us-text">
            <h2>About Us</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img src={Logo} className="about-us-logo" alt="logo" />
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-3">
            {/* <img src={Badges} alt="badges" className="badges" /> */}
            <div className="badges-container">
              <div className="left-badegs">
                <div className="custom-badge">
                  <h5>+700</h5>
                  <span>Projects</span>
                </div>
                <div className="custom-badge">
                  <h6>High</h6>
                  <h6>Quality</h6>
                </div>
              </div>
              <div className="right-badges">
                <div className="custom-badge">
                  <h5>+3</h5>
                  <span>Years Experience</span>
                </div>
                <div className="custom-badge">
                  <h6>Fast</h6>
                  <h6>Delivery</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-up-container">
          <ScrollToTopButton />
        </div>
      </div>
    </div>
  );
}
