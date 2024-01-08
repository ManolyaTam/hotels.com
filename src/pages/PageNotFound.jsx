import { Box, Container, Typography } from "@mui/material";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        minHeight="50vh"
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="textPrimary"
          mb={4}
        >
          404, Page Not Found
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color="textSecondary"
          mb={4}
        >
          Oops! It seems like you've entered an invalid URL.
        </Typography>
        <Button
          label="Go to Home Page"
          variant="contained"
          onClick={() => navigate("/home", { replace: true })}
        />
      </Box>
    </Container>
  );
};

export default PageNotFound;
