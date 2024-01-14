import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Container, Typography } from "@mui/material";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";

const LoggedInOnly = ({ children }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);

  if (!isLoggedIn) {
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBlock: 30,
        }}
      >
        <Typography variant="h5" align="center">
          Please log in to continue
        </Typography>
        <Typography variant="body2" align="center">
          Don't Worry, your data is saved &#128521;
        </Typography>
        <br />
        <Button onClick={() => navigate("/login")} label="login" />
      </Container>
    );
  }

  return children;
};

export default LoggedInOnly;
