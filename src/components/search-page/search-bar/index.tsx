"use client";

import { useDebouncedCallback } from "use-debounce";
import styles from "./search-bar.module.scss";
import { SearchIcon } from "@/components/_helpers/icons";
import { useContext, useState } from "react";
import { CocktailsContext } from "@/context/cocktails-context";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(CocktailsContext);

  const [inputValue, setInputValue] = useState(searchQuery);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value || e.target.value === "") {
      setInputValue(e.target.value);
      setSearchQueryDebounce(e.target.value);
    }
  };

  const setSearchQueryDebounce = useDebouncedCallback((value: string) => {
    setSearchQuery(value);
  }, 500);

  return (
    <div className={styles.search_bar_container}>
      <h2>Search Cocktails</h2>
      <div className={styles.search_bar}>
        <input
          type="text"
          onChange={onInputChange}
          value={inputValue}
          placeholder="Type here..."
        />
        <div className={styles.icon}>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
