"use client";

import { useState } from "react";
import styles from "./search-bar.module.scss";

type SearchSuggessionsProps = {
  searchSuggessions: string[];
  setSearchQuery: (value: string) => void;
};

const SearchSuggessions = ({
  setSearchQuery,
  searchSuggessions,
}: SearchSuggessionsProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={styles.suggessions}>
      {searchSuggessions.map((suggession, index) => {
        return (
          <button
            key={index}
            className={`${styles.suggession} ${activeIndex === index ? styles.suggession_active : ""}`}
            onClick={() => {
              if (activeIndex === index) {
                setActiveIndex(null);
                setSearchQuery("");
              } else {
                setActiveIndex(index);
                setSearchQuery(suggession);
              }
            }}
          >
            {suggession}
          </button>
        );
      })}
    </div>
  );
};

export default SearchSuggessions;
