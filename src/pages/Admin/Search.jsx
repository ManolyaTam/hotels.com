import { Box } from "@mui/material";
import { Input, Button } from "../../components";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { searchCities } from "../../services/admin/search/searchCities";
import { searchHotels } from "../../services/admin/search/searchHotels";
import { UserContext } from "../../providers/UserProvider";

const Search = ({ dataType, setData }) => {
  // dataType: "cities", "hotels" or "rooms"
  const { userAuth } = useContext(UserContext);
  const location = useLocation();
  const path = location.pathname;

  const formik = useFormik({
    initialValues: {
      searchQuery: "",
    },
    onSubmit: async (values) => {
      if (dataType === "cities") {
        const res = await searchCities(userAuth, values.searchQuery);
        setData(res);
      } else if (dataType === "hotels") {
        const res = await searchHotels(userAuth, values.searchQuery);
        setData(res);
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
