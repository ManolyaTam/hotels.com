import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

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
            <TableCell>-</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.country}</TableCell>
              <TableCell>{row.postOffice}</TableCell>
              <TableCell>{row.hotels}</TableCell>
              <TableCell>{row.creationDate}</TableCell>
              <TableCell>{row.modificationDate}</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Cities;