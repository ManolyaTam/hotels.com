import { Add, DeleteForever, Edit } from "@mui/icons-material";
import { MessageContext } from "../../providers/MessageProvider";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { deleteCity } from "../../services/admin/Delete/deleteCity";
import { Button } from "../../components/index";
import {
  Box,
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
import SlidingForm from "./SlidingForm";
import CreateCityForm from "./CreateForms/CreateCityForm";
import UpdateCityForm from "./UpdateForms/UpdateCityForm";

const Cities = ({ data }) => {
  const [createFormIsOpen, setCreateFromIsOpen] = useState(false);
  const [updateObject, setUpdateObject] = useState(false);
  const { showMessage, hideMessage } = useContext(MessageContext);
  const { userAuth } = useContext(UserContext);

  const DeleteCity = async (id) => {
    const res = await deleteCity(id, userAuth);
    if (res.status === "success") {
      showMessage("success", "City successfully deleted");
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

  const onCreate = () => {
    setCreateFromIsOpen(true);
  };

  return (
    <>
      <Paper style={{ marginTop: 15 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: 1,
            paddingRight: 1,
          }}
        >
          <Tooltip title="Add City">
            <IconButton color="primary" onClick={onCreate}>
              <Add />
            </IconButton>
          </Tooltip>
        </Box>
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
                  <Tooltip
                    title="Edit"
                    onClick={() => {
                      setUpdateObject(row);
                    }}
                  >
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
      <SlidingForm isOpen={createFormIsOpen} setIsOpen={setCreateFromIsOpen}>
        <CreateCityForm />
      </SlidingForm>
      {Boolean(updateObject) && (
        <SlidingForm isOpen={Boolean(updateObject)} setIsOpen={setUpdateObject}>
          <UpdateCityForm cityId={updateObject.id} initValues={updateObject} />
        </SlidingForm>
      )}
    </>
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
