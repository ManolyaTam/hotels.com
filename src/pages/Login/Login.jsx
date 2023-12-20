import "./login.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Input from "../../components/Input";
import Button from "../../components/Button";
import useLogin from "../../hooks/useLogin";

import { UserContext } from "../../providers/UserProvider";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user || !user?.userType) {
    } else if (user.userType?.toLowerCase() === "user") {
      navigate("/user/home");
    } else if (user.userType?.toLowerCase() === "admin") {
      navigate("/admin/home");
    }
  }, [user, navigate]);

  const { formik, onSubmit } = useLogin();
  return (
    <div className="login-page">
      <Paper className="login-paper">
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <form onSubmit={onSubmit}>
          <Input
            name="username"
            label="Username"
            fullWidth
            margin="normal"
            value={formik.values.username}
            onChange={formik.handleChange}
            required
          />
          <Input
            name="password"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={formik.values.password}
            onChange={formik.handleChange}
            required
          />
          <Button type="submit" label="Login" fullWidth />
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
