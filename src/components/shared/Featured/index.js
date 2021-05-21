import React from "react";
import "./Featured.scss";

const Featured = (product) => {
  const { title, imageUrl, price } = product;

  return (
    <div className="featured">
      <div className="featured-image">
        <img className="feat__img" src={imageUrl}></img>
      </div>
      <div className="name-price">
        <h3>{title}</h3>
        <p>${price}</p>
        <button className="button is-black nomad-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default Featured;
