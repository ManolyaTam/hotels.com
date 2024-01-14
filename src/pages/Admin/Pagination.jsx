import { Box, Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ count, defaultPage }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBlock: 3,
      }}
    >
      <MuiPagination count={count} defaultPage={defaultPage} />
    </Box>
  );
};
export default Pagination;
