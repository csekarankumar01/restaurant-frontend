import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <div className="container">
        <div className="banner text_content">
          <span className="brand_tagline">Crispy, Fresh, Authentic</span>
          <h1 className="main_title">
            Flavours That <br />
            Bring You <span className="highlight">Together.</span>
          </h1>
          <p className="description">
            Experience the art of authentic cooking. Every dish is crafted with carefully sourced ingredients, time-honored recipes, and a passion for unforgettable taste.
          </p>
          <div className="hero_buttons">
            <a href="#menu" className="btn_primary">
              Explore Menu <span><HiOutlineArrowNarrowRight /></span>
            </a>
            <a href="#reservation" className="btn_secondary">
              Book A Table
            </a>
          </div>
        </div>

        <div className="banner image_showcase">
          {/* Left Card */}
          <div className="image_wrapper primary_img">
            <img 
              src="/reservation.png" 
              alt="Signature Delicious Hot Pancakes" 
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80";
              }}
            />
          </div>
          
          {/* Right Card */}
          <div className="image_wrapper secondary_img">
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" 
              alt="Premium Crispy Chicken Burger" 
            />
            <div className="badge_floater">
              <span>Top Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;