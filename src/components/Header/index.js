import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="nav-menu container">
      <div className="logo">
        <Link to="/"> STORE</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
          <FontAwesomeIcon icon={faShoppingBag} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
