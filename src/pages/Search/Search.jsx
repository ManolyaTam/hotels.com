import { Grid, Box } from "@mui/material";
import SearchForm from "../../components/SearchForm";
import useParam from "../../hooks/useParam";
import DetailedRoomCard from "../../components/DetailedRoomCard";
import { searchResults } from "./searchResults";

// Each hotel's entry to include a thumbnail, name, star rating, price per night, and a brief description.z
const Search = () => {
  const { params } = useParam();

  return (
    <>
      <SearchForm initialValues={params} />
      <Grid container>
        <Grid item xs={12} sm={3}>
          hello world
        </Grid>
        <Grid item xs={12} sm={9}>
          {searchResults.map((item, index) => (
            <Box style={{ padding: 5 }}>
              <DetailedRoomCard
                key={index}
                {...searchResults[0]}
                imgUrl={item.roomPhotoUrl}
                price={item.roomPrice} // dont forget the discount
                rating={item.starRating}
                city={item.cityName}
                roomAmenities={item.amenities}
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Search;
