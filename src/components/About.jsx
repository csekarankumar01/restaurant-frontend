import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        {/* Left Side: Text Content */}
        <div className="banner">
          <div className="top">
            <p>ABOUT US</p>
          </div>
          <h1 className="heading">The only thing we're serious about is food.</h1>
          <p className="mid">
            We believe that every meal is a celebration. From sun-kissed mornings with our freshly brewed coffee to vibrant evenings filled with laughter and exquisite dinners, we are here to craft moments of joy. Our ingredients are sourced with care, our dishes made with love, and our space designed for you to unwind, connect, and enjoy life's delicious moments.
          </p>
          
          {/* FIX: Set href to "#menu" to scroll smoothly down to your menu component */}
          <a href="#menu">
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </a>
        </div>

        {/* Right Side: Image Asset */}
        <div className="banner">
          <img src="/about.png" alt="About our fresh food" />
        </div>
      </div>
    </section>
  );
};

export default About;