"use client";

import { useState } from "react";
import SearchBar from "./search-bar";
import SearchResults from "./search-results";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResults searchQuery={searchQuery} />
    </div>
  );
};

export default SearchPage;
