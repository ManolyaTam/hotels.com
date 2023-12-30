import { CartContext } from "../../providers/CartProvider";
import { useContext } from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import CartCard from "../../components/CartCard";
import Button from "../../components/Button";

const Checkout = () => {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <Container>
      <Typography sx={{ textAlign: "end", fontSize: "17px" }}>
        Total: $<b>{cart.reduce((total, item) => total + item.price, 0)}</b>
        <br />
        <Button label="Checkout" />
      </Typography>
      <Paper sx={{ padding: "5px", margin: "5px" }}>
        {cart?.length > 0 ? (
          cart.map((item, index) => (
            <Box key={"cart-" + index} style={{ margin: 10 }}>
              <CartCard
                {...item}
                imgUrl={item.roomPhotoUrl}
                price={item.price}
                adults={item.capacityOfAdults}
                children={item.capacityOfChildren}
                hotelId={item.hotel}
                showLinktoHotel
                onClick={() => {
                  dispatch({
                    ...item,
                    type: "DELETE",
                  });
                }}
              />
            </Box>
          ))
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Cart is Empty ¯\_(ツ)_/¯
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Checkout;
