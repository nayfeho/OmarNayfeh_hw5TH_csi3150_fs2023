import React from "react";
import "./hero.css";
import Image from "../Assets/HeroSection-bg-image.jpg";

const Hero = () => {
  return (
    <div className="Hero">
      <img className="heroImage" src={Image} alt="Hero Image"></img>
      <div class="centered">
        <h1>Travel Blog</h1>
        <h2>Travel to Beautiful Destinations that we have listed</h2>
      </div>
    </div>
  );
};

export default Hero;
