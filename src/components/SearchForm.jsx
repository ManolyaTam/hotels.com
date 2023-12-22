import Input from "./Input";
import DateRangePicker from "./DateRangePicker";
import Button from "./Button";
import Box from "@mui/material/Box";

const SearchForm = ({ label }) => {
  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form>
        <Input
          className="search-input"
          style={{ marginRight: 5, width: 400 }}
          placeholder="Search for hotels, cities..."
          label={label}
        />
        <DateRangePicker />
        <Input
          type="number"
          style={{ marginLeft: 5, marginRight: 2.5, width: 100 }}
          label="Adults"
        />
        <Input
          type="number"
          style={{ marginRight: 2.5, width: 100 }}
          label="Children"
        />
        <Input
          type="number"
          style={{ marginRight: 2.5, width: 100 }}
          label="Rooms"
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
