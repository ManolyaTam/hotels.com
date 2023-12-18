import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Avatar from "./Avatar";
import { UserContext } from "./providers/UserProvider";
import { useContext } from "react";

const NavBar = () => {
  const { user } = useContext(UserContext);
  return user !== null ? (
    <Box>
      <AppBar
        sx={{
          paddingInline: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box className="navbar-left">Logo here</Box>
        <Box className="navbar-right">
          <Avatar />
        </Box>
      </AppBar>
      <div style={{ marginTop: "80px" }} />
    </Box>
  ) : (
    <></>
  );
};
export default NavBar;
