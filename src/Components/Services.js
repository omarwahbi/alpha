import React from "react";
import Navbar from "./Navbar";

export default function Services() {
  return (
    <div className="services-container">
      <Navbar />
      <div className="consultation">
        <h1>GET A FREE </h1>
        <h1>CONSULTATION</h1>
        <p>We would be happy to help you build a plan</p>
        <div className="get-started-form">
          <a href="#" className="go-to-form-link">
            <div className="form-link-text">
              <span className="purple-circle-form"></span>
              <span className="go-to-form-text">Get Started</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
