import { DeleteForever, Edit } from "@mui/icons-material";
import { MessageContext } from "../../providers/MessageProvider";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { deleteCity } from "../../services/admin/deleteCity"; // Updated import statement
import Button from "../../components/Button";
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

const Cities = ({ data }) => {
  const { showMessage, hideMessage } = useContext(MessageContext);
  const { userAuth } = useContext(UserContext);

  const DeleteCity = async (id) => {
    const res = await deleteCity(id, userAuth);
    if (res.status === "success") {
      showMessage("success", "city successfully deleted");
    } else if (res.status === "fail") {
      showMessage("error", "something went wrong");
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
          DeleteCity(id);
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
                  <IconButton color="error" onClick={() => onDelete(row.id)}>
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

const DeletePopup = ({ id, onOk, onCancel }) => {
  return (
    <Container>
      <Typography>
        Are you sure you want to delete City with id = {id}
      </Typography>
      <Button label="Yes" variant="text" onClick={onOk} />
      <Button label="No" variant="text" onClick={onCancel} />
    </Container>
  );
};
