import { Snackbar, Alert as MuiAlert } from "@mui/material";
import PropTypes from "prop-types";

const Toast = ({ message, isOpen, type, anchorOrigin, onClose }) => {
  const alertStyle = type ? {} : { border: "1px solid #ddd" };
  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={anchorOrigin || { horizontal: "left", vertical: "bottom" }}
      onClose={onClose}
    >
      <MuiAlert onClose={onClose} severity={type || ""} sx={alertStyle}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(["left", "center", "right"]),
    vertical: PropTypes.oneOf(["top", "center", "bottom"]),
  }),
  type: PropTypes.oneOf(["info", "success", "error", "warning"]),
  onClose: PropTypes.func,
};

export default Toast;
