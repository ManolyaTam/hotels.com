import {
  Avatar as MuiAvatar,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";

import { UserContext } from "../providers/UserProvider";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Avatar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useContext(UserContext);
  const userInitials = user?.firstName[0] + user?.lastName[0] || null;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <span>
      <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
        <MuiAvatar sx={{ width: 32, height: 32, fontSize: 15 }}>
          {userInitials}
        </MuiAvatar>
      </IconButton>
      {location.pathname !== "/login" && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Typography sx={{ padding: 1 }}>
            {user ? user.firstName + " " + user.lastName : null}
          </Typography>
          <MenuItem
            onClick={() => {
              navigate("/login");
              setUser(null);
            }}
          >
            <ListItemIcon>
              {user ? (
                <>
                  <Logout fontSize="small" />
                  <Typography style={{ marginLeft: "10px" }}>Logout</Typography>
                </>
              ) : (
                <>
                  <LoginIcon fontSize="small" />
                  <Typography style={{ marginLeft: "10px" }}>Login</Typography>
                </>
              )}
            </ListItemIcon>
          </MenuItem>
        </Menu>
      )}
    </span>
  );
};

export default Avatar;
