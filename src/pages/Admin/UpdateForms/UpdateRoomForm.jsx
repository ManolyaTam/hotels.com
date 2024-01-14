import { useFormik } from "formik";
import { TextField, Button, Typography } from "@mui/material";
import * as yup from "yup";
import { MessageContext } from "../../../providers/MessageProvider";
import { UserContext } from "../../../providers/UserProvider";
import { useContext } from "react";
import { updateRoom } from "../../../services/admin/Update/updateRoom";

const UpdateRoomForm = ({ roomId, initVals }) => {
  const { userAuth } = useContext(UserContext);
  const { showMessage } = useContext(MessageContext);
  const formik = useFormik({
    initialValues: {
      roomNumber: initVals?.roomNumber || "",
      type: initVals?.type || "",
      adults: initVals?.adults || 1,
      children: initVals?.children || 0,
      price: initVals?.price || 0,
    },
    validationSchema: yup.object({
      roomNumber: yup.string().required("Room number is required"),
      type: yup.string().required("Type is required"),
      adults: yup
        .number()
        .required("Number of adults is required")
        .min(1, "Number of adults must be greater than or equal to 1"),
      children: yup
        .number()
        .required("Number of children is required")
        .min(0, "Number of children must be greater than or equal to 0"),
      price: yup
        .number()
        .required("Price is required")
        .min(1, "Price must be greater than 0"),
    }),
    onSubmit: async (values) => {
      const { roomNumber, type, adults, children, price } = values;
      const res = await updateRoom(
        userAuth,
        roomId,
        roomNumber,
        type,
        adults,
        children,
        price,
      );
      if (res.status === "success") {
        showMessage("success", "Room was successfully updated");
      } else if (res.status === "error") {
        showMessage("error", "Something went wrong, please try again later");
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "33vw",
      }}
    >
      <Typography variant="h5">Update Room</Typography>
      <TextField id="roomId" name="roomId" label="Room ID" value={roomId} />
      <TextField
        id="roomNumber"
        name="roomNumber"
        label="Room Number"
        value={formik.values.roomNumber}
        onChange={formik.handleChange}
        error={formik.touched.roomNumber && Boolean(formik.errors.roomNumber)}
        helperText={formik.touched.roomNumber && formik.errors.roomNumber}
      />
      <TextField
        id="type"
        name="type"
        label="Type"
        value={formik.values.type}
        onChange={formik.handleChange}
        error={formik.touched.type && Boolean(formik.errors.type)}
        helperText={formik.touched.type && formik.errors.type}
      />
      <TextField
        id="adults"
        name="adults"
        label="Adults"
        value={formik.values.adults}
        onChange={formik.handleChange}
        error={formik.touched.adults && Boolean(formik.errors.adults)}
        helperText={formik.touched.adults && formik.errors.adults}
      />
      <TextField
        id="children"
        name="children"
        label="Children"
        value={formik.values.children}
        onChange={formik.handleChange}
        error={formik.touched.children && Boolean(formik.errors.children)}
        helperText={formik.touched.children && formik.errors.children}
      />
      <TextField
        id="price"
        name="price"
        label="Price"
        value={formik.values.price}
        onChange={formik.handleChange}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
      />
      <Button type="submit">Update</Button>
    </form>
  );
};

export default UpdateRoomForm;
