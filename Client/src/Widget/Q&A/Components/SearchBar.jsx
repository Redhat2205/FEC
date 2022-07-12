import React, { useState, useEffect} from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchLength, setSearchLength] = useState(false);

  if (searchInput.length >= 3) {
    setSearchLength(true);
    console.log(searchInput);
  }
  useEffect(() => {

  }, [searchLength]);
  return (
    <input
      placeholder="Have a question? Search for answers…"
      onChange={(e) => { setSearchInput(e.target.value); }}
    />
  );
};
export default SearchBar;