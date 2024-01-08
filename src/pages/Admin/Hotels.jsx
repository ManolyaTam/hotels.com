import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { DeleteForever, Edit } from "@mui/icons-material";
const Hotels = ({ data }) => {
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
                <IconButton color="error">
                  <DeleteForever />
                </IconButton>
                <IconButton color="primary">
                  <Edit />
                </IconButton>
                <IconButton color="primary">
                  <ManageSearchIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Hotels;
