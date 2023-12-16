import { Avatar as MuiAvatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";

const Avatar = ({ user }) => {
  const userInitials = user?.firstName[0] + user?.lastName[0];
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
          {user.firstName + " " + user.lastName}
        </Typography>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </span>
  );
};

export default Avatar;
