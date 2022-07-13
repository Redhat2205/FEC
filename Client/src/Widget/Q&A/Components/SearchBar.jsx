import React from "react";

const SearchBar = ({ searchHandler, searchInput, setSearchInput }) => (
  <input
    placeholder="Have a question? Search for answers…"
    onChange={(e) => {
      searchHandler(e.target.value);
    }}
  />
);

export default SearchBar;