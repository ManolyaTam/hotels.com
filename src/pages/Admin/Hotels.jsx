import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { DeleteForever, Edit } from "@mui/icons-material";

const Hotels = ({ data }) => {
  const navigate = useNavigate();

  const viewRooms = (id) => {
    navigate(`/admin/hotels/${id}/rooms`);
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
                  <IconButton color="error">
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
