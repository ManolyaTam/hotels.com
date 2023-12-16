import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Avatar from "./Avatar";

const NavBar = () => {
  return (
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
  );
};
export default NavBar;
