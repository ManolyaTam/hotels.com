import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Typography } from "@mui/material";

const LoggedInOnly = ({ children }) => {
  const { isLoggedIn } = useContext(UserContext);
  return !isLoggedIn ? (
    <Typography color="error">Please log in to continue</Typography>
  ) : (
    children
  );
};

export default LoggedInOnly;
