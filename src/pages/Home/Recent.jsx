import HotelCard from "../../components/HotelCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Recent = ({ recentArr }) => {
  return (
    <>
      <Typography variant="h6">Recently Visited Hotels</Typography>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {recentArr.map((item, index) => (
          <Box key={"recent-" + index} style={{ margin: 10 }}>
            <HotelCard
              {...item}
              imgUrl={item.thumbnailUrl}
              // price={item.finalPrice} TODO: check if price is always given
              city={item.cityName}
              rating={item.starRating}
              originalPrice={item.originalRoomPrice}
              date={item.visitDate}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Recent;
