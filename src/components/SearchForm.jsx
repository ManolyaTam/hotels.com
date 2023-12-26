import Input from "./Input";
import DateRangePicker from "./DateRangePicker";
import Button from "./Button";
import Box from "@mui/material/Box";
import { Formik } from "formik";
import dayjs from "dayjs";

const SearchForm = () => {
  const dateFormat = "DD-MM-YYYY";

  return (
    <Box
      style={{
        marginBottom: 20,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Formik
        initialValues={{
          search: "",
          dateRange: [
            dayjs("20-10-2023", dateFormat),
            dayjs("22-10-2023", dateFormat),
          ],
          numberOfRooms: 1,
          adults: 2,
          children: 0,
          city: "",
          starRate: "",
          sort: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          console.log(values.dateRange[0].toDate());
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Input
              name="search"
              className="search-input"
              style={{ marginRight: 5, width: 400 }}
              placeholder="Search for hotels, cities..."
              value={props.values.search}
              onChange={props.handleChange}
            />

            <DateRangePicker
              name="checkInDate"
              value={props.values.dateRange}
              onChange={props.handleChange}
            />

            <Input
              name="adults"
              type="number"
              style={{ marginLeft: 5, marginRight: 2.5, width: 100 }}
              label="Adults"
              value={props.values.adults.toString()}
              onChange={props.handleChange}
            />
            <Input
              name="children"
              type="number"
              style={{ marginRight: 2.5, width: 100 }}
              label="Children"
              value={props.values.children.toString()}
              onChange={props.handleChange}
            />
            <Input
              name="numberOfRooms"
              type="number"
              style={{ marginRight: 2.5, width: 100 }}
              label="Rooms"
              value={props.values.numberOfRooms.toString()}
              onChange={props.handleChange}
            />
            <Button
              type="submit"
              label="Search"
              variant="contained"
              style={{ padding: 7, marginLeft: 20 }}
            />
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default SearchForm;
