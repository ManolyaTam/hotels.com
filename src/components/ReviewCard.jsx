import { Card, CardContent, Typography, Rating } from "@mui/material";

const ReviewCard = ({ review }) => {
  const { customerName, rating, description } = review;

  return (
    <Card sx={{ margin: 1, userSelect: "none" }}>
      <CardContent>
        <Typography variant="h6">{customerName}</Typography>
        <Rating value={rating} precision={0.5} readOnly />
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
