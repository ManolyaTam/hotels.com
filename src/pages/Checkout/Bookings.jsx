import { Button } from "../../components/index";

import { Card, Box, CardContent, Typography } from "@mui/material";

const getBookingsFromArray = (responses) => {
  return responses.map((res) => res.res);
};

const Bookings = ({ responses }) => {
  const reservations = getBookingsFromArray(responses);

  return (
    <>
      <Box display="flex" justifyContent="flex-end" sx={{ marginBlock: 1 }}>
        <Button label="Print" onClick={() => window.print()} />
      </Box>
      {reservations.map((res) => {
        return (
          <Card key={res.confirmationNumber} sx={{ marginBottom: "1rem" }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Customer Name: {res.customerName}
              </Typography>
              <Typography variant="body1" component="div">
                <b>Hotel Name:</b> {res.hotelName}
              </Typography>
              <Typography variant="body1" component="div">
                <b>Room Number:</b> {res.roomNumber}
              </Typography>
              <Typography variant="body1" component="div">
                <b>Room Type:</b> {res.roomType}
              </Typography>
              <Typography variant="body1" component="div">
                <b>Booking Date Time:</b> {res.bookingDateTime}
              </Typography>
              <Typography variant="body1" component="div">
                <b>Total Cost:</b> ${res.totalCost}
              </Typography>
              <Typography variant="body1" component="div">
                <b>Payment Method:</b> {res.paymentMethod}
              </Typography>
              <Typography variant="body1" component="div">
                <b>Booking Status:</b> {res.bookingStatus}
              </Typography>
              <Typography variant="body1" component="div">
                <b>Confirmation Number:</b> {res.confirmationNumber}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default Bookings;
