import { RoomCard } from "../../components/index";
import { Box, Container } from "@mui/material";
import { CartContext } from "../../providers/CartProvider";
import { useContext } from "react";

const Rooms = ({ hotelNumber, rooms }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <Container sx={{ display: "flex", flexWrap: "wrap" }}>
      {rooms.map((item, index) =>
        item.availability ? (
          <RoomCard
            key={"rooms-" + index}
            {...item}
            imgUrl={item.roomPhotoUrl}
            price={item.price}
            adults={item.capacityOfAdults}
            children={item.capacityOfChildren}
            onClick={() => {
              dispatch({
                hotelNumber: hotelNumber,
                room: item,
                type: "ADD",
              });
            }}
            style={{ margin: 5 }}
          />
        ) : null,
      )}
    </Container>
  );
};
export default Rooms;
