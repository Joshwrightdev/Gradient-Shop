import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero is-large is-info hero-image">
      <div className="hero-body">
        <p className="hero__title">gradients.shop</p>
        <div className="shop-now-btn">
          <button className="button is-black" id="shop-now">
            Shop All
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
