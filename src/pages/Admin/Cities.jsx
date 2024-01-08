import { DeleteForever, Edit } from "@mui/icons-material";
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

const Cities = ({ data }) => {
  return (
    <Paper style={{ marginTop: 15 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Post Office</TableCell>
            <TableCell>Hotels</TableCell>
            <TableCell>Creation Date</TableCell>
            <TableCell>Modification Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.country}</TableCell>
              <TableCell>{row.postOffice}</TableCell>
              <TableCell>{row.hotels}</TableCell>
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
  );
};

export default Cities;
