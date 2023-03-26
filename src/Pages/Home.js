import React from "react";
import AboutUs from "../Components/AboutUs";
import Heading from "../Components/Heading";
import CustomNavbar from "../Components/Navbar";
import Testimonials from "../Components/Testimonials";

export default function Home() {
  return (
    <div>
      <CustomNavbar />
      <Heading />
      <Testimonials />
      <AboutUs />
    </div>
  );
}
