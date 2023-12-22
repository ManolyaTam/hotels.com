import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Avatar from "../Avatar";
import Typography from "@mui/material/Typography";

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
        <Typography className="navbar-left" variant="h5" style={{ margin: 5 }}>
          Hotels.com
        </Typography>
        <Box className="navbar-right">
          <Avatar />
        </Box>
      </AppBar>
      <div style={{ marginTop: "80px" }} />
    </Box>
  );
};
export default NavBar;
