import React, { createContext, useReducer } from "react";
import cartReducer from "./cart-reducer";

export const CartContext = createContext();

const intialState = { cartItems: [], itemCoint: 0, total: 0 };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, intialState);

  const contextValues = {
    ...state,
  };
  return (
    <CartContext.Provider value={{ contextValues }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
