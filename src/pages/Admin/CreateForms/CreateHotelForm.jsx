import { useFormik } from "formik";
import { TextField, Button, Typography } from "@mui/material";
import * as yup from "yup";

const CreateHotelForm = () => {
  const formik = useFormik({
    initialValues: {
      hotelOwner: "",
      rooms: 0,
      starRating: 1,
    },
    validationSchema: yup.object({
      hotelOwner: yup.string().required("Hotel owner is required"),
      rooms: yup.number().required("Rooms must be a number"),
      starRating: yup.number().required("Star rating is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
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
      <Typography variant="h5">Add a new Hotel</Typography>
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
      <Button type="submit">Create</Button>
    </form>
  );
};

export default CreateHotelForm;
