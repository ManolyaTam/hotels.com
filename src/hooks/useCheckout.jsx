import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "../providers/UserProvider";
import { CartContext } from "../providers/CartProvider";
import { useContext } from "react";
import { checkout } from "../services/checkout/checkout";
import { MessageContext } from "../providers/MessageProvider";

const useCheckout = (setCheckoutRes, setActiveStep) => {
  const { user } = useContext(UserContext);
  const { cart, dispatch } = useContext(CartContext);
  const { showMessage } = useContext(MessageContext);

  const onSubmit = async (values) => {
    const checkoutPromises = cart.map((room) => {
      const toSubmit = {
        customerName: values.firstName + " " + values.lastName,
        hotelName: room.hotelNumber,
        roomNumber: room.roomNumber,
        roomType: room.roomType,
        bookingDateTime: new Date().toISOString(),
        totalCost: room.price,
        paymentMethod: values.paymentMethod,
        bookingStatus: "",
      };
      return checkout(toSubmit, user.authentication);
    });

    const responses = await Promise.all(checkoutPromises);

    const successfulResponses = responses.filter(
      (response) => response.status === "success",
    );

    if (successfulResponses.length === cart.length) {
      setCheckoutRes((prevCheckoutRes) => [
        ...prevCheckoutRes,
        ...successfulResponses,
      ]);
      dispatch({ type: "DELETE_ALL" });
      setActiveStep(2);
      showMessage("success", "Your reservation was successful!");
    }
  };

  const validationSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: yup
      .string()
      .matches(/^[\d()-]+$/, "Invalid phone number")
      .min(10, "Phone Number must be at least 10 characters")
      .required("Phone Number is required"),
    paymentMethod: yup
      .string()
      .notOneOf(["none"], "Payment method is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: "",
      paymentMethod: "none",
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: onSubmit,
  });

  return { formik };
};
export default useCheckout;
