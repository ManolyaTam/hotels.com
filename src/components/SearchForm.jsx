import Input from "./Input";
import RangePicker from "./RangePicker";
import Button from "./Button";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import useParam from "../hooks/useParam";

const SearchForm = ({ initialValues }) => {
  const navigate = useNavigate();
  const { setParam } = useParam();
  const formik = useFormik({
    initialValues: initialValues
      ? {
          ...initialValues,
          dateRange: +initialValues.checkin
            ? [
                new Date(+initialValues.checkin),
                new Date(+initialValues.checkout),
              ]
            : null,
        }
      : {
          search: "",
          dateRange: 0,
          numberOfRooms: 1,
          adults: 2,
          children: 0,
          city: "",
          starRate: "",
          sort: "",
        },
    onSubmit: (values) => {
      if (values.dateRange?.length === 2) {
        values.checkin = new Date(values.dateRange[0]).getTime();
        values.checkout = new Date(values.dateRange[1]).getTime();
        values.dateRange = null;
      }
      const queryParams = new URLSearchParams();

      Object.entries(values).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== "") {
          queryParams.append(key, value.toString());
        }
      });
      setParam(queryParams);
      navigate(`/search?${queryParams.toString()}`);
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
