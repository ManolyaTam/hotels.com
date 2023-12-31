import Input from "./Input";
import RangePicker from "./RangePicker";
import Button from "./Button";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useParam from "../hooks/useParam";
import dayjs from "dayjs";

const SearchForm = ({ initialValues }) => {
  const today = dayjs();
  const navigate = useNavigate();
  const { setParam } = useParam();
  const [date, setDate] = useState([
    initialValues?.checkin
      ? new Date(Number(initialValues?.checkin))
      : new Date(today),
    initialValues?.checkout
      ? new Date(Number(initialValues?.checkout))
      : new Date(today.add(1, "day")),
  ]);
  const formik = useFormik({
    initialValues: initialValues
      ? initialValues
      : {
          search: "",
          numberOfRooms: 1,
          adults: 2,
          children: 0,
          city: "",
          starRate: "",
          sort: "",
        },
    onSubmit: (values) => {
      values.checkin = date[0].getTime();
      values.checkout = date[1].getTime();

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
          value={date}
          onChange={(value) => {
            setDate(value);
          }}
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
