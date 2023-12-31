import { Box } from "@mui/material";
import SearchForm from "../../components/SearchForm";
import useParam from "../../hooks/useParam";

const Search = () => {
  const { params } = useParam();
  return (
    <Box>
      <SearchForm initialValues={params} />
    </Box>
  );
};

export default Search;
