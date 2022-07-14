import React from "react";
import Style from "../../../StyleComponents/QA_Styles/Style.jsx";

const SearchBar = ({ searchHandler, searchInput, setSearchInput }) => (
  <Style.SearchBar
    placeholder="Have a question? Search for answers…"
    onChange={(e) => {
      searchHandler(e.target.value);
    }}
  />
);

export default SearchBar;