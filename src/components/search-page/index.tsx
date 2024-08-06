"use client";

import { useState } from "react";
import SearchBar from "./search-bar";
import SearchResults from "./search-results";
import FloatingSaveButton from "./floating-save-button";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResults searchQuery={searchQuery} />
      <FloatingSaveButton />
    </div>
  );
};

export default SearchPage;
