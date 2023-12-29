import { Container, Typography, Rating } from "@mui/material";
const Details = ({ hotelName, location, rating = 0, description }) => {
  return (
    <Container style={{ paddingBlock: "10px" }}>
      <Typography variant="h5">{hotelName}</Typography>
      <Typography fontSize={15} color="text.secondary">
        {location}
      </Typography>
      <Rating value={rating} size="small" precision={0.25} readOnly />
      <Typography>{description}</Typography>
    </Container>
  );
};

export default Details;
