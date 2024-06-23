import React from "react";
import "./hero.scss";
type Props = {};

const HeroSection = (props: Props) => {
  return (
      <section className="hero">
          <div></div>
      <div className="hero_container">
        <div className="hero_text">
          <h2>New Arraival!</h2>
          <h1>Discover Our New Collection</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            inventore ex voluptate deleniti nostrum quod illo perferendis!
            Harum, maxime expedita!
          </p>
        </div>
        <div className="hero_button">
          <a href="/shop" className="button">
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
