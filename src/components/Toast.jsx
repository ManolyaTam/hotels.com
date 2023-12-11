import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PropTypes from "prop-types";

const Toast = ({
  message,
  isOpen,
  type,
  anchorOrigin,
  autoHideDuration,
  onClose,
}) => {
  const [open, setOpen] = useState(isOpen ?? true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    onClose();
  };
  const alertStyle = type ? {} : { border: "1px solid #ddd" };
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration ?? 5000}
      anchorOrigin={anchorOrigin || { horizontal: "left", vertical: "bottom" }}
      onClose={handleClose}
    >
      <MuiAlert
        onClose={handleClose}
        severity={type || ""}
        sx={alertStyle}
        autoHideDuration={autoHideDuration}
      >
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
  autoHideDuration: PropTypes.number,
  type: PropTypes.oneOf(["info", "success", "error", "warning"]),
  onClose: PropTypes.func,
};

export default Toast;
