import React from "react";
import { withRouter } from "react-router-dom";
import GradientForSale from "../../assets/banner.PNG";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-middle">
        <div className="main-m-image">
          <img className="grad__bundle" src={GradientForSale}></img>
          <div className="main-m-description">
            <h2 className="sale__text">Gradient Bundle Pack (95% OFF)</h2>
            <button
              className="button is-bulma description__btn"
              id="shop-now"
              // onClick={() => history.push("/product/1")}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Main);
