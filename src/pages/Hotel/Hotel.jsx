import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Map from "./Map";
import useGetHotel from "../../hooks/useGetHotel";
import { useParams } from "react-router-dom";
import Details from "./Details";
import { CircularProgress } from "@mui/material";
import GuestReviews from "./GuestReviews";

const Hotel = () => {
  const params = useParams(); // to read hotel id from url
  const { hotel } = useGetHotel(+params.id);

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
            What our guests think
            <GuestReviews />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper sx={{ mb: 2, height: 300 }}>
            <Typography>Picture Gallery</Typography>
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
