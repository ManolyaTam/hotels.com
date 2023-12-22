import "./search-bar.css";
import Input from "../Input";
import DateRangePicker from "../DateRangePicker";
import PropTypes from "prop-types";

const SearchBar = ({ name, textSearchPlaceholder, label }) => {
  return (
    <div className="search-bar">
      <Input
        className="search-input"
        style={{ margin: 5, width: 400 }}
        name={name}
        placeholder={textSearchPlaceholder}
        label={label}
      />
      <DateRangePicker />
      <Input type="number" style={{ margin: 5, width: 100 }} label="Children" />
      <Input type="number" style={{ margin: 5, width: 100 }} label="Adults" />
      <Input type="number" style={{ margin: 5, width: 100 }} label="Rooms" />
    </div>
  );
};

SearchBar.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default SearchBar;
