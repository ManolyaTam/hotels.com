import { Box, AppBar, IconButton, Typography, Badge } from "@mui/material";
import { Avatar } from "../index";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";

import { NavLink } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { CartContext } from "../../providers/CartProvider";
import { useState, useContext } from "react";
import { AdminSidebar } from "../index";

const NavBar = () => {
  const { isAdmin } = useContext(UserContext);
  const { cart } = useContext(CartContext);

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
            <NavLink
              to="/home"
              style={{ color: "white", textDecoration: "none" }}
            >
              Hotels.com
            </NavLink>
          </Typography>
        </Box>
        <Box className="navbar-right">
          <Box display="flex" alignItems="center">
            <NavLink
              to="/home"
              style={{
                color: "white",
                textDecoration: "none",
                marginInline: "10px",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/checkout"
              style={{
                color: "white",
                textDecoration: "none",
                marginInline: "10px",
                marginTop: "5px",
              }}
            >
              <Badge badgeContent={cart?.length} color="warning">
                <ShoppingBagIcon />
              </Badge>
            </NavLink>
            <Avatar />
          </Box>
        </Box>
      </AppBar>
      {isAdmin && <AdminSidebar onClose={handleDrawerClose} open={open} />}
      <Box style={{ marginTop: "80px" }} />
    </Box>
  );
};
export default NavBar;
