import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PropTypes from "prop-types";

const Toast = ({
  message,
  isOpen,
  type,
  anchorOrigin,
  autoHideAfter,
  onClose,
}) => {
  const alertStyle = type ? {} : { border: "1px solid #ddd" };
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={autoHideAfter ?? 5000}
      anchorOrigin={anchorOrigin || { horizontal: "left", vertical: "bottom" }}
      onClose={onClose}
    >
      <MuiAlert
        onClose={onClose}
        severity={type || ""}
        sx={alertStyle}
        autoHideDuration={autoHideAfter}
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
