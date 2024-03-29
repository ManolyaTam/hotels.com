import { Button, RangePicker } from "../../components/index";
import { getHotelRoomsByDate } from "../../services/hotel/getHotelRooms";

const RoomsSearch = ({
  date,
  setDate,
  hotelNumber,
  setRooms,
  setShowDates,
}) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const checkin = date[0].getTime();
    const checkout = date[1].getTime();
    const res = await getHotelRoomsByDate(hotelNumber, checkin, checkout);
    setRooms(res);
    setShowDates(true);
  };

  return (
    <form onSubmit={onSubmit}>
      <RangePicker
        value={date}
        onChange={(value) => {
          setDate(value);
        }}
      />
      <Button label="Search" type="submit" style={{ marginInline: 5 }} />
    </form>
  );
};
export default RoomsSearch;
