import { DeleteForever, Edit, Add } from "@mui/icons-material";
import { useParams } from "react-router-dom";
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
} from "@mui/material";
import { useEffect, useState } from "react";
import { getAllRoomsInHotel } from "../../services/admin/fetchRooms";
import { getHotelInfoById } from "../../services/admin/fetchHotels";

const HotelRooms = () => {
  const params = useParams();
  const [rooms, setRooms] = useState([]);
  const [hotel, setHotel] = useState("");
  useEffect(() => {
    const loadRooms = async () => {
      const res = await getAllRoomsInHotel(params.id);
      setRooms(res);
    };
    loadRooms();
    const loadHotelData = async () => {
      const res = await getHotelInfoById(params.id);
      setHotel(res);
    };
    loadHotelData();
  }, [params]);

  return (
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
        <Tooltip title="Create Room">
          <IconButton color="primary">
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
                    <IconButton color="error">
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
  );
};

export default HotelRooms;
