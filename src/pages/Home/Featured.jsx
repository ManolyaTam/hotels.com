import { Typography, Box } from "@mui/material";
import HotelCard from "../../components/HotelCard";

const Featured = ({ featuredArr }) => {
  return (
    <>
      <Typography variant="h6">Featured Deals</Typography>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {featuredArr.map((item, index) => (
          <Box key={"featured-" + index} style={{ margin: 10 }}>
            <HotelCard
              {...item}
              imgUrl={item.roomPhotoUrl}
              price={item.finalPrice}
              city={item.cityName}
              rating={item.hotelStarRating}
              originalPrice={item.originalRoomPrice}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Featured;
