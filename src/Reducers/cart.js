const reducer = (cart, action) => {
  // action => {type: add/delete, HotelName, room }
  switch (action.type) {
    case "ADD": {
      const newData = { hotel: action.hotelNumber, room: action.room };
      const isAlreadyInCart = cart.some(
        (cartItem) =>
          cartItem.room.roomNumber === newData.room.roomNumber &&
          cartItem.hotel === newData.hotel,
      );

      if (!isAlreadyInCart) {
        return [...cart, newData];
      }

      return cart;
    }
    case "DELETE": {
      return cart.filter(
        (cartItem) =>
          cartItem.roomNumber !== action.room.roomNumber ||
          cartItem.hotelNumber !== action.hotelNumber,
      );
    }
    case "GET": {
      return cart;
    }
    default:
      return cart;
  }
};

export { reducer };
