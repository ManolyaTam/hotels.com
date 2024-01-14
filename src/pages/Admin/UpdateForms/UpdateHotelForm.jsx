import { useFormik } from "formik";
import { TextField, Button, Typography } from "@mui/material";
import * as yup from "yup";
import { updateHotel } from "../../../services/admin/Update/updateHotel";
import { UserContext } from "../../../providers/UserProvider";
import { useContext } from "react";
import { MessageContext } from "../../../providers/MessageProvider";

const UpdateHotelForm = ({ hotelId, initVals }) => {
  const { userAuth } = useContext(UserContext);
  const { showMessage } = useContext(MessageContext);
  const formik = useFormik({
    initialValues: {
      cityId: initVals.cityId || "",
      hotelName: initVals.hotel || "",
      hotelOwner: initVals.hotelOwner || "",
      rooms: initVals.rooms || 0,
      starRating: initVals.starRating || 1,
      description: initVals.description || "",
      latitude: initVals.latitude || 0,
      longitude: initVals.longitude || 0,
    },
    validationSchema: yup.object({
      cityId: yup.string().required("City ID is required"),
      hotelName: yup.string().required("Hotel name is required"),
      hotelOwner: yup.string().required("Hotel owner is required"),
      rooms: yup
        .number()
        .required("Rooms must be a number")
        .min(0, "Rooms must be a non-negative number"),
      starRating: yup
        .number()
        .min(1, "Star rating must be greater than or equal to 1")
        .max(5, "Star rating must be less than or equal to 5")
        .required("Star rating is required"),
      description: yup.string().required("Description is required"),
      latitude: yup
        .number()
        .required("Latitude is required")
        .min(-90, "Latitude must be between -90 and 90")
        .max(90, "Latitude must be between -90 and 90"),
      longitude: yup
        .number()
        .required("Longitude is required")
        .min(-180, "Longitude must be between -180 and 180")
        .max(180, "Longitude must be between -180 and 180"),
    }),
    onSubmit: async (values) => {
      const {
        cityId,
        hotelName,
        hotelOwner,
        rooms,
        starRating,
        description,
        latitude,
        longitude,
      } = values;
      const res = await updateHotel(
        userAuth,
        hotelId,
        cityId,
        hotelName,
        hotelOwner,
        rooms,
        starRating,
        description,
        +latitude,
        +longitude,
      );
      if (res.status === "success") {
        showMessage("success", "Hotel was successfully updated");
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
      <Typography variant="h5">Update Hotel</Typography>
      <TextField
        id="hotelId"
        name="hotelId"
        label="Hotel ID"
        value={hotelId}
        error={formik.touched.cityId && Boolean(formik.errors.cityId)}
        helperText={formik.touched.cityId && formik.errors.cityId}
      />
      <TextField
        id="cityId"
        name="cityId"
        label="City ID"
        value={formik.values.cityId}
        onChange={formik.handleChange}
        error={formik.touched.cityId && Boolean(formik.errors.cityId)}
        helperText={formik.touched.cityId && formik.errors.cityId}
      />
      <TextField
        id="hotelName"
        name="hotelName"
        label="Hotel Name"
        value={formik.values.hotelName}
        onChange={formik.handleChange}
        error={formik.touched.hotelName && Boolean(formik.errors.hotelName)}
        helperText={formik.touched.hotelName && formik.errors.hotelName}
      />
      <TextField
        id="hotelOwner"
        name="hotelOwner"
        label="Hotel Owner"
        value={formik.values.hotelOwner}
        onChange={formik.handleChange}
        error={formik.touched.hotelOwner && Boolean(formik.errors.hotelOwner)}
        helperText={formik.touched.hotelOwner && formik.errors.hotelOwner}
      />
      <TextField
        id="rooms"
        name="rooms"
        label="Rooms"
        value={formik.values.rooms}
        onChange={formik.handleChange}
        error={formik.touched.rooms && Boolean(formik.errors.rooms)}
        helperText={formik.touched.rooms && formik.errors.rooms}
      />
      <TextField
        id="starRating"
        name="starRating"
        label="Star Rating"
        value={formik.values.starRating}
        onChange={formik.handleChange}
        error={formik.touched.starRating && Boolean(formik.errors.starRating)}
        helperText={formik.touched.starRating && formik.errors.starRating}
      />
      <TextField
        id="description"
        name="description"
        label="Description"
        multiline
        rows={4}
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <TextField
        id="latitude"
        name="latitude"
        label="Latitude"
        value={formik.values.latitude}
        onChange={formik.handleChange}
        error={formik.touched.latitude && Boolean(formik.errors.latitude)}
        helperText={formik.touched.latitude && formik.errors.latitude}
      />
      <TextField
        id="longitude"
        name="longitude"
        label="Longitude"
        value={formik.values.longitude}
        onChange={formik.handleChange}
        error={formik.touched.longitude && Boolean(formik.errors.longitude)}
        helperText={formik.touched.longitude && formik.errors.longitude}
      />
      <Button type="submit">Update</Button>
    </form>
  );
};

export default UpdateHotelForm;
