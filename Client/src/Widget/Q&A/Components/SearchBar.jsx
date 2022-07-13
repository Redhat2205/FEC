import React, { useState, useEffect} from "react";

const SearchBar = () => {
  return (
    <input
      placeholder="Have a question? Search for answers…"
      onChange={(e) => { setSearchInput(e.target.value); }}
    />
  );
};
export default SearchBar;