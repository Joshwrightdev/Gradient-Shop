import React, { useContext } from "react";
import { isInCart } from "../../helpers/helpers";
import {CartContext} from "../../../context/cart-context"
import { withRouter } from "react-router-dom";
import "./Featured.scss";

const Featured = (props) => {
  const { title, imageUrl, price, history, id, description } = props;
  const product = { title, imageUrl, price, id, description };
  const { addProduct, cartItems } = useContext(CartContext);
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
        {!isInCart(product, cartItems) && (
          <button
            className="button is-black nomad-btn"
            onClick={() => addProduct(product)}
          >
            ADD TO CART
          </button>
        )}
        {isInCart(product, cartItems) && (
          <button className="button is-black nomad-btn" id="btn-white-outline" onClick={() => {}}>
            ADD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default withRouter(Featured);
