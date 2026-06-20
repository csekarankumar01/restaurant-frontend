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
              src="/avocado_toast.png" 
              alt="Delicious Avocado Toast" 
            />
          </div>
          
          {/* Right Card */}
          <div className="image_wrapper secondary_img">
            <img 
              src="/buddha_bowl.png" 
              alt="Fresh Vegan Buddha Bowl" 
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