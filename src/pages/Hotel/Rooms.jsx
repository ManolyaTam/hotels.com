import RoomCard from "../../components/RoomCard";
import { Box } from "@mui/material";
import { CartContext } from "../../providers/CartProvider";
import { useContext } from "react";

const Rooms = ({ hotelNumber, rooms }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <Box>
      {rooms.map((item, index) =>
        item.availability ? (
          <Box key={"featured-" + index} style={{ margin: 10 }}>
            <RoomCard
              {...item}
              imgUrl={item.roomPhotoUrl}
              price={item.price}
              adults={item.capacityOfAdults}
              children={item.capacityOfChildren}
              onClick={() => {
                dispatch({
                  hotelNumber: hotelNumber,
                  roomNumber: item.roomNumber,
                  type: "ADD",
                });
              }}
            />
          </Box>
        ) : (
          ""
        ),
      )}
    </Box>
  );
};
export default Rooms;
