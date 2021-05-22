import React, { useContext } from "react";
import "./CartIcon.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import {CartContext} from "../../context/cart-context";

const CartIcon = () => {
  const { itemCount, cartItems } = useContext(CartContext);
  console.log('CartItems:',cartItems)
  return (
    <div className="cart-container">
      <FontAwesomeIcon
        className="cart__icon"
        alt="shopping-cart-icon"
        icon={faShoppingBag}
      />
      {itemCount > 0 ? <span className="cart-count">{itemCount}</span> : null}
    </div>
  );
};

export default CartIcon;
