"use client";

import { useDebouncedCallback } from "use-debounce";
import styles from "./search-bar.module.scss";

type SearchBarProps = {
  searchQuery?: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ setSearchQuery }: SearchBarProps) => {
  const handleSearchInputChange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value || e.target.value === "") {
        setSearchQuery(e.target.value);
      }
    },
    500,
  );

  return (
    <div className={styles.search_bar_container}>
      <h2>Search Cocktails</h2>
      <input
        type="text"
        onChange={handleSearchInputChange}
        className={styles.search_bar}
        placeholder="Type here..."
      />
    </div>
  );
};

export default SearchBar;
