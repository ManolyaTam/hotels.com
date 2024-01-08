import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Typography, Box, Container } from "@mui/material";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const AdminsOnly = ({ children }) => {
  const { isAdmin } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Box>
      {!isAdmin && (
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
              403, Forbidden
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              color="textSecondary"
              mb={4}
            >
              You shall not pass&#129497;
              <br /> This page is for adminstrators only
            </Typography>
            <Button
              label="Go to Home Page"
              variant="contained"
              onClick={() => navigate("/home", { replace: true })}
            />
          </Box>
        </Container>
      )}

      {isAdmin && children}
    </Box>
  );
};

export default AdminsOnly;
