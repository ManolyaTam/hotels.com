import { DeleteForever, Edit, Add } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { MessageContext } from "../../providers/MessageProvider";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { getAllRoomsInHotel } from "../../services/admin/fetchRooms";
import { getHotelInfoById } from "../../services/admin/fetchHotels";
import { deleteRoom } from "../../services/admin/deleteRoom";
import { UserContext } from "../../providers/UserProvider";
import Button from "../../components/Button";
import CreateForm from "./CreateForm";
import CreateRoomForm from "./CreateForms/CreateRoomForm";

const HotelRooms = () => {
  const { showMessage, hideMessage } = useContext(MessageContext);
  const params = useParams();
  const [rooms, setRooms] = useState([]);
  const [hotel, setHotel] = useState("");
  const hotelId = params.id;
  const { userAuth } = useContext(UserContext);
  const [createFormIsOpen, setCreateFromIsOpen] = useState(false);

  useEffect(() => {
    const loadRooms = async () => {
      const res = await getAllRoomsInHotel(hotelId);
      setRooms(res);
    };
    loadRooms();
    const loadHotelData = async () => {
      const res = await getHotelInfoById(hotelId);
      setHotel(res);
    };
    loadHotelData();
  }, [hotelId]);

  const DeleteRoom = async (roomId) => {
    const res = await deleteRoom(hotelId, roomId, userAuth);
    if (res.status === "success") {
      showMessage("success", "Room successfully deleted");
    } else if (res.status === "fail") {
      showMessage("error", "something went wrong");
    } else {
      showMessage(
        "warning",
        "an unexpected error occured, please contact website adminstrator",
      );
    }
  };

  const onCreate = () => {
    setCreateFromIsOpen(true);
  };

  const onDelete = (roomId) => {
    showMessage(
      "error",
      <DeletePopup
        id={roomId}
        onCancel={hideMessage}
        onOk={() => {
          hideMessage();
          DeleteRoom(hotelId, roomId, userAuth);
        }}
      />,
    );
  };

  return (
    <>
      <Box marginInline="auto" maxWidth={1000}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginBottom={2}
        >
          <Typography>
            Showing rooms of <b>{hotel.hotelName}</b>
          </Typography>
          <Tooltip title="Add Room">
            <IconButton color="primary" onClick={onCreate}>
              <Add />
            </IconButton>
          </Tooltip>
        </Box>
        <Paper style={{ marginTop: 15 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell>availability</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Adults</TableCell>
                <TableCell>Children</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Creation Date</TableCell>
                <TableCell>Modification Date</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rooms.map((row) => (
                <TableRow key={row.roomId}>
                  <TableCell>{row.roomNumber}</TableCell>
                  <TableCell>{row.availability ? "Yes" : "No"}</TableCell>
                  <TableCell>{row.roomType}</TableCell>
                  <TableCell>{row.capacityOfAdults}</TableCell>
                  <TableCell>{row.capacityOfChildren}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.creationDate}</TableCell>
                  <TableCell>{row.modificationDate}</TableCell>
                  <TableCell>
                    <Tooltip title="Delete">
                      <IconButton
                        color="error"
                        onClick={() => onDelete(row.roomId)}
                      >
                        <DeleteForever />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton color="primary">
                        <Edit />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
      <CreateForm isOpen={createFormIsOpen} setIsOpen={setCreateFromIsOpen}>
        <CreateRoomForm hotelId={hotelId} />
      </CreateForm>
    </>
  );
};

export default HotelRooms;

const DeletePopup = ({ id, onOk, onCancel }) => {
  return (
    <Container>
      <Typography>
        Are you sure you want to delete Room with id = {id}
      </Typography>
      <Button label="Yes" variant="text" onClick={onOk} />
      <Button label="No" variant="text" onClick={onCancel} />
    </Container>
  );
};
