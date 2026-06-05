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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            nihil quo dolore dignissimos perferendis iusto error iure nemo
            facere, vitae adipisci aspernatur! Unde asperiores expedita, fugit
            natus aliquid voluptatem similique, accusamus quasi molestiae
            dolore facere error culpa! Pariatur illum, ex ullam quo qui illo
            minima maxime doloremque vel. Odio, ipsum!
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