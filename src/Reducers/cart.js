const reducer = (cart, action) => {
  // action => {type: add/delete, HotelName, ...room }
  switch (action.type) {
    case "ADD": {
      const newData = { hotelNumber: action.hotelNumber, ...action.room };
      const isAlreadyInCart = cart.some(
        (cartItem) =>
          cartItem.roomNumber === newData.roomNumber &&
          cartItem.hotelNumber === newData.hotelNumber,
      );

      if (!isAlreadyInCart) {
        return [...cart, newData];
      }

      return cart;
    }

    case "DELETE": {
      const { roomNumber, hotelNumber } = action;
      const newCart = cart.filter(
        (cartItem) =>
          cartItem.roomNumber !== roomNumber ||
          cartItem.hotelNumber !== hotelNumber,
      );
      return newCart;
    }
    default:
      return cart;
  }
};

export { reducer };
