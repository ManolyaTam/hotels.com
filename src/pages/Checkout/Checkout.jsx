import { CartContext } from "../../providers/CartProvider";
import { useContext } from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import RoomCard from "../../components/RoomCard";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <Paper>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <Box key={"cart-" + index} style={{ margin: 10 }}>
              <RoomCard
                {...item.room}
                imgUrl={item.room.roomPhotoUrl}
                price={item.room.price}
                adults={item.room.capacityOfAdults}
                children={item.room.capacityOfChildren}
                hotelId={item.hotel}
                showLinktoHotel
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
