import React from "react";
import { withRouter } from "react-router-dom";
import "./Featured.scss";

const Featured = (props) => {
  const { title, imageUrl, price, history, id } = props;

  return (
    <div className="featured">
      <div
        className="featured-image"
        onClick={() => history.push(`/product/${id}`)}
      >
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

export default withRouter(Featured);
