import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Avatar from "../Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { UserContext } from "../../providers/UserProvider";
import { useState, useContext } from "react";
import AdminSidebar from "./AdminSidebar";

const NavBar = () => {
  const { user } = useContext(UserContext);
  const isAdmin = user?.userType.toLowerCase() === "admin";

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        <Box className="navbar-left" sx={{ paddingInline: 1, display: "flex" }}>
          {isAdmin && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h5" style={{ margin: 5 }}>
            Hotels.com
          </Typography>
        </Box>
        <Box className="navbar-right">
          <Avatar />
        </Box>
      </AppBar>
      {isAdmin && <AdminSidebar onClose={handleDrawerClose} open={open} />}
      <Box style={{ marginTop: "80px" }} />
    </Box>
  );
};
export default NavBar;
