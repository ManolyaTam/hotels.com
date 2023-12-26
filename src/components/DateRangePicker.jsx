import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import PropTypes from "prop-types";
import { DatePicker } from "antd";

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

const DateRangePicker = ({ defaultDate, name, value, onChange }) => {
  const today = dayjs();

  return (
    <RangePicker
      name={name}
      value={value}
      onChange={onChange}
      placeholder={["Check-in", "Checkout"]}
      style={{
        boxSizing: "border-box",
        height: 40,
        font: "roboto",
        borderRadius: "4px",
      }}
      defaultValue={[
        defaultDate?.start || today,
        defaultDate?.end || today.add(1, "day"),
      ]}
    />
  );
};

DateRangePicker.propTypes = {
  defaultDate: PropTypes.shape({
    start: PropTypes.instanceOf(dayjs),
    end: PropTypes.instanceOf(dayjs),
  }),
};

export default DateRangePicker;
