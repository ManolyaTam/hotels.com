import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HotelCard from "../../components/HotelCard";

const Featured = ({ featuredArr }) => {
  return (
    <>
      <Typography variant="h6">Featured Deals</Typography>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {featuredArr.map((item, index) => (
          <div key={"featured-" + index} style={{ margin: 10 }}>
            <HotelCard
              {...item}
              imgUrl={item.roomPhotoUrl}
              price={item.finalPrice}
              city={item.cityName}
              rating={item.hotelStarRating}
              originalPrice={item.originalRoomPrice}
            />
          </div>
        ))}
      </Box>
    </>
  );
};

export default Featured;
