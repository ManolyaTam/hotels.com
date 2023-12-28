import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { MessageContext } from "../providers/MessageProvider";
import { useContext } from "react";
import login from "../services/login";

const useLogin = () => {
  const userContext = useContext(UserContext);
  const { showMessage } = useContext(MessageContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const username = formik.values.username;
    const password = formik.values.password;

    login(username, password)
      .then((res) => {
        if (res.status === "success") {
          const { status, ...userData } = res;
          userContext.setUser(userData);
          showMessage("success", `Welcome back, ${userData.firstName}!`);
          return res.userType.toLowerCase();
        } else if (res.status === "failed") {
          if (res.statusCode === 400) {
            showMessage("warning", "Username and password are required");
          } else if (res.statusCode === 401) {
            showMessage(
              "warning",
              "Username/Password combination is invalid, please try again",
            );
          }
        }
      })
      .then((userType) => {
        if (userType === "user") {
          navigate("/home");
        } else if (userType === "admin") {
          navigate("/admin");
        }
      });
  };

  return {
    formik,
    onSubmit,
  };
};

export default useLogin;
