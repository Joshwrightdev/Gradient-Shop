import React from "react";
import "./CartIcon.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";



const CartIcon = () => {
  return (
    
    <div className="cart-container"> 
      <FontAwesomeIcon
        className="cart__icon"
        alt="shopping-cart-icon"
        icon={faShoppingBag}
      />
      <span className="cart-count">5</span>
      
    </div>
  );
};

export default CartIcon;
