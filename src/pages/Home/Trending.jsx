import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DestinationCard from "../../components/DestinationCard";

const Trending = ({ trendingArr }) => {
  return (
    <>
      <Typography variant="h6">Trending Destinations</Typography>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {trendingArr.map((item, index) => (
          <div key={"trending-" + index} style={{ margin: 10 }}>
            <DestinationCard
              {...item}
              imgUrl={item.thumbnailUrl}
              city={item.cityName}
              country={item.countryName}
              description={item.description}
            />
          </div>
        ))}
      </Box>
    </>
  );
};

export default Trending;
