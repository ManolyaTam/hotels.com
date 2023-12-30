import { Typography, Paper, Grid, CircularProgress } from "@mui/material";
import Map from "./Map";
import useFetchHotelData from "../../hooks/useGetHotel";
import { useParams } from "react-router-dom";
import Details from "./Details";
import GuestReviews from "./GuestReviews";
import Gallery from "./Gallery";

const Hotel = () => {
  const params = useParams(); // to read hotel id from url
  const { hotel, reviews, gallery } = useFetchHotelData(+params.id);

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
          <Paper sx={{ backgroundColor: "#fbfbfb" }}>
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
          <Paper sx={{ height: 200 }}>
            <Typography>Available Rooms</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Hotel;
