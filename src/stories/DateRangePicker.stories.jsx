import { DateRangePicker } from "../components/index";
import dayjs from "dayjs";

const DateRangePickerStory = {
  component: DateRangePicker,
  title: "Date Picker",
  tags: ["autodocs"],
};

const today = dayjs();

export const Default = {
  args: {},
};

export const withGivenDate = {
  args: {
    defaultDate: {
      start: today.add(10, "day"),
      end: today.add(14, "day"),
    },
  },
};

export default DateRangePickerStory;
