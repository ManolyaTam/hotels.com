import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Map from "./Map";
const Hotel = () => {
  return (
    <>
      <Grid container columnGap={2}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ mb: 2, height: 200 }}>
            <Typography>Hotel Details</Typography>
          </Paper>

          <Paper sx={{ height: 200 }}>
            <Map />
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
