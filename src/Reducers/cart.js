const reducer = (cart, action) => {
  // action => {type: add/delete, hotelNumber, roomNumber }
  switch (action.type) {
    case "ADD":
      return [...cart, { hotel: action.hotelNumber, room: action.roomNumber }];
    case "DELETE": {
      return cart.filter(
        (cartItem) =>
          cartItem.roomNumber !== action.roomNumber ||
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
