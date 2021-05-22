import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import ProductContextProvider from "./context/products-context";
import CartContextProvider from "./context/cart-context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <ProductContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
