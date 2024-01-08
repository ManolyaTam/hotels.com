import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  styled,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import BedIcon from "@mui/icons-material/Bed";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import { useNavigate } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AdminSidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const drawerWidth = 240;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {[
          {
            text: "Manage Cities",
            icon: <PlaceIcon />,
            navTo: "/admin/cities",
          },
          {
            text: "Manage Hotels",
            icon: <MapsHomeWorkIcon />,
            navTo: "/admin/hotels",
          },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.navTo);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AdminSidebar;
