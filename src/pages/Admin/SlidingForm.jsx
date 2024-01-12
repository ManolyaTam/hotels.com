import { Box, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SlidingForm = ({ children, isOpen, setIsOpen }) => {
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        variant="persistent"
        anchor="right"
      >
        <div>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <Box sx={{ padding: 2, boxSizing: "border-box" }}>{children}</Box>
      </Drawer>
    </>
  );
};

export default SlidingForm;
