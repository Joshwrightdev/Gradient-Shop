import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section class="hero is-large is-info hero-image">
      <div class="hero-body">
        <p class="hero__title">Gradients</p>
        <div className="shop-now-btn">
          <button className="button is-black" id="shop-now">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
