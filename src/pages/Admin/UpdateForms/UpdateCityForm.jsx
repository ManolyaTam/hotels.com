import { useFormik } from "formik";
import { TextField, Button, Typography } from "@mui/material";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { MessageContext } from "../../../providers/MessageProvider";
import { UpdateCity } from "../../../services/admin/Update/updateCity";

const CreateCityForm = ({ cityId, initValues }) => {
  const { userAuth } = useContext(UserContext);
  const { showMessage } = useContext(MessageContext);
  const formik = useFormik({
    initialValues: {
      cityName: initValues?.city || "",
      country: initValues?.country || "",
      postOffice: initValues?.postOffice || "",
      hotels: initValues?.hotels || 0,
    },
    validationSchema: yup.object({
      cityName: yup.string().required("City name is required"),
      country: yup.string().required("Country is required"),
      postOffice: yup.string().required("Post Office is required"),
      hotels: yup
        .number()
        .min(0, "Hotels must be a non-negative number or 0")
        .required("Hotels must be a number"),
    }),
    onSubmit: async (values) => {
      const { cityName, country, postOffice, hotels } = values;
      const res = await UpdateCity(
        userAuth,
        cityId,
        cityName,
        country,
        postOffice,
        hotels,
      );
      if (res.status === "success") {
        showMessage("success", "City was successfully updated");
      } else if (res.status === "error") {
        showMessage("error", "Something went wrong, please try again later");
      } else {
        showMessage(
          "warning",
          "an unexpected error occured, please contact website adminstrator",
        );
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
      <Typography variant="h5">Add a new City</Typography>
      <TextField id="cityId" name="cityId" label="City ID" value={cityId} />
      <TextField
        id="cityName"
        name="cityName"
        label="City Name"
        value={formik.values.cityName}
        onChange={formik.handleChange}
        error={formik.touched.cityName && Boolean(formik.errors.cityName)}
        helperText={formik.touched.cityName && formik.errors.cityName}
      />
      <TextField
        id="country"
        name="country"
        label="Country"
        value={formik.values.country}
        onChange={formik.handleChange}
        error={formik.touched.country && Boolean(formik.errors.country)}
        helperText={formik.touched.country && formik.errors.country}
      />
      <TextField
        id="postOffice"
        name="postOffice"
        label="Post Office"
        value={formik.values.postOffice}
        onChange={formik.handleChange}
        error={formik.touched.postOffice && Boolean(formik.errors.postOffice)}
        helperText={formik.touched.postOffice && formik.errors.postOffice}
      />
      <TextField
        id="hotels"
        name="hotels"
        label="Hotels"
        value={formik.values.hotels}
        onChange={formik.handleChange}
        error={formik.touched.hotels && Boolean(formik.errors.hotels)}
        helperText={formik.touched.hotels && formik.errors.hotels}
      />
      <Button type="submit">Update</Button>
    </form>
  );
};

export default CreateCityForm;
