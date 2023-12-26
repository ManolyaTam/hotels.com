import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { useContext } from "react";
import login from "../services/login";

const useLogin = () => {
  const userContext = useContext(UserContext);
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
          return res.userType.toLowerCase();
        }
      })
      .then((userType) => {
        if (userType === "user") {
          navigate("/home");
          // TODO: add welcomming message, and error messages for 400 and 401
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
