import SearchBar from "../components/SearchBar/SearchBar";

const SearchBarStory = {
  component: SearchBar,
  title: "Search Bar",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    label: "Search",
    placeholder: "Search for hotels, cities...",
    fullWidth: true,
  },
};

export default SearchBarStory;
