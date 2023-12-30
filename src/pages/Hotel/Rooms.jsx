import RoomCard from "../../components/RoomCard";
import { Box } from "@mui/material";
const Rooms = ({ rooms }) => {
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
