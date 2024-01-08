import { Typography, Paper, Grid, CircularProgress, Box } from "@mui/material";
import Map from "./Map";
import RoomsSearch from "./RoomsSearch";
import useFetchHotelData from "../../hooks/useGetHotel";
import { useParams } from "react-router-dom";
import Details from "./Details";
import GuestReviews from "./GuestReviews";
import Gallery from "./Gallery";
import Rooms from "./Rooms";

const Hotel = () => {
  const params = useParams(); // to read hotel id from url
  const { hotel, reviews, gallery, rooms } = useFetchHotelData(+params.id);

  return (
    <>
      <Grid container columnGap={2}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ mb: 2 }}>
            <Details
              hotelName={hotel.hotelName}
              location={hotel.location}
              rating={hotel.starRating}
              description={hotel.description}
            />
          </Paper>

          <Paper sx={{ mb: 2, height: 400 }}>
            {hotel.latitude && hotel.longitude ? (
              <Map position={[hotel.latitude, hotel.longitude]} />
            ) : (
              <CircularProgress />
            )}
          </Paper>
          <Paper sx={{ backgroundColor: "#fbfbfb", mb: 2 }}>
            <Typography sx={{ textAlign: "center" }} variant="h6">
              What our guests think
            </Typography>
            <GuestReviews reviews={reviews} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper sx={{ mb: 2 }}>
            {gallery.length ? (
              <Gallery images={gallery} />
            ) : (
              <CircularProgress />
            )}
          </Paper>
          <Paper sx={{ backgroundColor: "#fbfbfb", mb: 2, padding: "10px" }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">Available Rooms</Typography>
              <RoomsSearch />
            </Box>
            <Rooms rooms={rooms} hotelNumber={params.id} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Hotel;
