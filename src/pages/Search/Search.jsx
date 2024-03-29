import { Grid, Box, CircularProgress } from "@mui/material";
import useParam from "../../hooks/useParam";
import {
  DetailedRoomCard,
  NoResults,
  SearchForm,
} from "../../components/index";
import { searchHotels } from "../../services/search/searchHotels";
import Filter from "./Filter";
import { useState, useEffect } from "react";

const Search = () => {
  const { params } = useParam();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const res = await searchHotels(params);
      setResults(res);
      setLoading(false);
    };
    fetchResults();
  }, [params]);
  return (
    <>
      <SearchForm initialValues={params} />
      <Grid container padding="5px" margin="5px">
        <Grid item xs={12} sm={3}>
          <Filter />
        </Grid>
        {!loading ? (
          <Grid item xs={12} sm={9}>
            <Box display={"flex"} flexWrap={"wrap"}>
              {results.length ? (
                results.map((item, index) => (
                  <Box key={index} style={{ padding: 5 }}>
                    <DetailedRoomCard
                      {...item}
                      imgUrl={item.roomPhotoUrl}
                      price={item.roomPrice}
                      rating={item.starRating}
                      city={item.cityName}
                      roomAmenities={item.amenities}
                    />
                  </Box>
                ))
              ) : (
                <NoResults />
              )}
            </Box>
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </>
  );
};

export default Search;
