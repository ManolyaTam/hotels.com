import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/providers/UserProvider";
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
        console.log("user", userContext.user);
        if (res.status === "success") {
          console.log(res);
          const { status, ...userData } = res;
          console.log("userData", userData);
          userContext.setUser(userData);
          return res.userType.toLowerCase();
          // TODO: update user context and navigate to next page dependint on user type
        }
      })
      .then((userType) => {
        if (userType === "user") {
          navigate("/user/home");
          // TODO: add welcomming message, and error messages for 400 and 401
        } else if (userType === "admin") {
          navigate("/admin/home");
        }
      });
  };
  return {
    formik,
    onSubmit,
  };
};

export default useLogin;
