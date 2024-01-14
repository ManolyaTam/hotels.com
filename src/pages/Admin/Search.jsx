import { Box } from "@mui/material";
import { Input, Button } from "../../components";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Search = ({ dataType }) => {
  // dataType: "cities", "hotels" or "rooms"
  const location = useLocation();
  const path = location.pathname;

  const formik = useFormik({
    initialValues: {
      searchQuery: "",
    },
    onSubmit: (values) => {
      if (dataType === "cities") {
        console.log(`searching for ${values.searchQuery} in cities`);
      } else if (dataType === "hotels") {
        console.log(`searching for ${values.searchQuery} in hotels`);
      }
    },
  });

  // Clear form when navigating to another page
  useEffect(() => {
    formik.resetForm();
    // do not add formik to dep array bec it changes whenever the values change
    // eslint-disable-next-line
  }, [path]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex">
        <Input
          label={`Search ${dataType}`}
          type="text"
          fullWidth
          id="searchQuery"
          name="searchQuery"
          value={formik.values.searchQuery}
          onChange={formik.handleChange}
        />
        <Button
          label="Search"
          variant="contained"
          style={{ marginInline: 5 }}
          type="submit"
        />
      </Box>
    </form>
  );
};

export default Search;
