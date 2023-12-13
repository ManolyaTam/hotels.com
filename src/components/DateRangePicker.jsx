import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import PropTypes from "prop-types";
import { DatePicker } from "antd";

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

const DateRangePicker = ({ defaultDate }) => {
  const today = dayjs();

  return (
    <RangePicker
      style={{
        boxSizing: "border-box",
        height: 40,
        fontFamily: "roboto",
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
