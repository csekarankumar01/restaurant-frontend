import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Qualities from '../components/Qualities';
import Menu from '../components/Menu';
import WhoAreWE from '../components/WhoAreWE';
import Team from '../components/Team';
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className="homePage">
      <Navbar />
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWE />
      <Team />
      <Reservation /> 
      <Footer /> 
    </div>
  );
};

export default Home;