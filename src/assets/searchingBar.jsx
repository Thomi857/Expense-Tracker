import React from "react";

function SearchInput({ searchTerm, handleSearch }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search category"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default SearchInput;



// <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearch} />