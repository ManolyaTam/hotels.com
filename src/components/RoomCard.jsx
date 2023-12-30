import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";
import Button from "./Button";
import PersonIcon from "@mui/icons-material/Person";

const RoomCard = ({
  onClick,
  imgUrl,
  alt,
  roomType,
  adults,
  children,
  price,
  roomNumber,
  roomAmenities,
}) => {
  return (
    <Card sx={{ maxheight: "140px", display: "flex" }}>
      <CardActionArea onClick={onClick} sx={{ maxWidth: "200px" }}>
        <CardMedia component="img" image={imgUrl} alt={alt} />
      </CardActionArea>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <Typography fontSize={12} color="text.secondary">
          Room Number: <b>{roomNumber}</b>
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography fontSize={12} color="text.secondary">
            Type: <b>{roomType}</b>
          </Typography>
          <Box>
            {Array.from({ length: adults }).map((_, i) => (
              <PersonIcon sx={{ fontSize: "20px" }} key={i} />
            ))}
            {Array.from({ length: children }).map((_, i) => (
              <PersonIcon sx={{ fontSize: "15px" }} key={i} />
            ))}
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              color="success.main"
              style={{ fontWeight: "bold" }}
              component="span"
            >
              ${price}
            </Typography>
          </Box>
          <Button label="Add to Cart" onClick={() => {}} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
