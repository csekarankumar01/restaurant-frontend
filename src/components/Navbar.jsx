import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="logo">IndianRestro</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <a href="#heroSection">HOME</a>
          <a href="#about">ABOUT US</a>
          <a href="#menu">SERVICES</a>
          <a href="#team">TEAM</a>
          <a href="#reservation">RESERVATION</a>
        </div>
        
        {/* FIX: Changed button wrapper to an anchor tag targeting the #menu element ID */}
        <a href="#menu" className="menuButton" style={{ textDecoration: "none", textAlign: "center" }}>
          OUR MENU
        </a>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;