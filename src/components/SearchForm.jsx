import Input from "./Input";
import RangePicker from "./RangePicker";
import Button from "./Button";
import { Box } from "@mui/material";
import { useFormik } from "formik";

const SearchForm = () => {
  const formik = useFormik({
    initialValues: {
      search: "",
      dateRange: null,
      numberOfRooms: 1,
      adults: 2,
      children: 0,
      city: "",
      starRate: "",
      sort: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box
      style={{
        marginBottom: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Input
          name="search"
          className="search-input"
          style={{ marginRight: 5, width: 400 }}
          placeholder="Search for hotels, cities..."
          value={formik.values.search}
          onChange={formik.handleChange}
        />

        <RangePicker
          name="checkInDate"
          value={formik.values.dateRange}
          onChange={(value) => formik.setFieldValue("dateRange", value)}
        />

        <Input
          name="adults"
          type="number"
          style={{ marginLeft: 5, marginRight: 2.5, width: 100 }}
          label="Adults"
          value={formik.values.adults.toString()}
          onChange={formik.handleChange}
        />
        <Input
          name="children"
          type="number"
          style={{ marginRight: 2.5, width: 100 }}
          label="Children"
          value={formik.values.children.toString()}
          onChange={formik.handleChange}
        />
        <Input
          name="numberOfRooms"
          type="number"
          style={{ marginRight: 2.5, width: 100 }}
          label="Rooms"
          value={formik.values.numberOfRooms.toString()}
          onChange={formik.handleChange}
        />
        <Button
          type="submit"
          label="Search"
          variant="contained"
          style={{ padding: 7, marginLeft: 20 }}
        />
      </form>
    </Box>
  );
};

export default SearchForm;
