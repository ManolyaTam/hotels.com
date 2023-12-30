import "./login.css";
import { Box, Paper, Typography } from "@mui/material";
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
    if (!user || !user?.userType) return;
    if (user.userType?.toLowerCase() === "user") {
      navigate("/home");
    } else if (user.userType?.toLowerCase() === "admin") {
      navigate("/admin/home");
    }
  }, [user, navigate]);

  const { formik } = useLogin();
  return (
    <Box className="login-page">
      <Paper className="login-paper">
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit} noValidate>
          <Input
            name="username"
            label="Username"
            fullWidth
            margin="normal"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
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
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.password)}
            helperText={formik.touched.username && formik.errors.password}
            required
          />
          <Button type="submit" label="Login" fullWidth />
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
