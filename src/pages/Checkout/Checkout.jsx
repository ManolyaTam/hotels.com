import { CartContext } from "../../providers/CartProvider";
import { useContext } from "react";
import { Box } from "@mui/material";
const Checkout = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <>
      {cart.map((item, index) => (
        <Box key={index}>{item.room}</Box>
      ))}
    </>
  );
};
export default Checkout;
