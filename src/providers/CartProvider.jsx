import { createContext, useReducer, useEffect } from "react";
import { reducer } from "../reducers/cart";
export const CartContext = createContext();

const getCartFromLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart;
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, getCartFromLocalStorage()); // [value, funciton] = useReducer(function, value)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
