import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import "./CartIcon.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/cart-context";

const CartIcon = ({ history }) => {
  const { itemCount, cartItems } = useContext(CartContext);
  console.log("CartItems:", cartItems);
  return (
    <div className="cart-container" onClick={() => history.push("/cart")}>
      <FontAwesomeIcon
        className="cart__icon"
        alt="shopping-cart-icon"
        icon={faShoppingBag}
      />
      {itemCount > 0 ? <span className="cart-count">{itemCount}</span> : null}
    </div>
  );
};

export default withRouter(CartIcon);
