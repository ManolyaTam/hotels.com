import {
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { DeleteForever, Edit } from "@mui/icons-material";
import { useContext } from "react";
import { MessageContext } from "../../providers/MessageProvider";
import { UserContext } from "../../providers/UserProvider";
import { getHotelInfoById } from "../../services/admin/fetchHotels";
import { deleteHotel } from "../../services/admin/deleteHotel";
import Button from "../../components/Button";

const Hotels = ({ data }) => {
  const navigate = useNavigate();
  const { showMessage, hideMessage } = useContext(MessageContext);
  const { userAuth } = useContext(UserContext);

  const viewRooms = (id) => {
    navigate(`/admin/hotels/${id}/rooms`);
  };

  const DeleteHotel = async (hotelId) => {
    const hotelDetails = await getHotelInfoById(hotelId);
    if (hotelDetails?.cityId) {
      const res = await deleteHotel(hotelDetails.cityId, hotelId, userAuth);
      if (res.status === "success") {
        showMessage("success", "Hotel successfully deleted");
      } else if (res.status === "fail") {
        showMessage("error", "something went wrong");
      } else {
        showMessage(
          "warning",
          "an unexpected error occured, please contact website adminstrator",
        );
      }
    } else {
      showMessage(
        "warning",
        "an unexpected error occured, please contact website adminstrator",
      );
    }
  };

  const onDelete = (id) => {
    showMessage(
      "error",
      <DeletePopup
        id={id}
        onCancel={hideMessage}
        onOk={() => {
          hideMessage();
          DeleteHotel(id);
        }}
      />,
    );
  };

  return (
    <Paper style={{ marginTop: 15 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Hotel</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Rooms</TableCell>
            <TableCell>Star Rating</TableCell>
            <TableCell>Creation Date</TableCell>
            <TableCell>Modification Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.hotel}</TableCell>
              <TableCell>{row.owner}</TableCell>
              <TableCell>{row.rooms}</TableCell>
              <TableCell>{row.starRating}</TableCell>
              <TableCell>{row.creationDate}</TableCell>
              <TableCell>{row.modificationDate}</TableCell>
              <TableCell>
                <Tooltip title="Delete">
                  <IconButton color="error" onClick={() => onDelete(row.id)}>
                    <DeleteForever />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip title="View Rooms">
                  <IconButton color="primary" onClick={() => viewRooms(row.id)}>
                    <ManageSearchIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Hotels;

const DeletePopup = ({ id, onOk, onCancel }) => {
  return (
    <Container>
      <Typography>
        Are you sure you want to delete Hotel with id = {id}
      </Typography>
      <Button label="Yes" variant="text" onClick={onOk} />
      <Button label="No" variant="text" onClick={onCancel} />
    </Container>
  );
};
