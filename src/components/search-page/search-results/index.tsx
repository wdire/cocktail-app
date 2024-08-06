"use client";

import { cocktailSearchAction } from "@/actions/cocktail-search.action";
import { CocktailSearchResultItem } from "@/types/cocktail.type";
import { useCallback, useEffect, useState } from "react";

type SearchResultsProps = {
  searchQuery: string;
};

const SearchResults = ({ searchQuery }: SearchResultsProps) => {
  const [results, setResults] = useState<CocktailSearchResultItem[]>([]);

  const makeSearch = useCallback(async () => {
    try {
      const newSearchResults = await cocktailSearchAction({ searchQuery });
      console.log(newSearchResults);
      setResults(newSearchResults.results);
    } catch (error) {
      console.error(error);

      alert(error instanceof Error ? error.message : "Search failed");
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery) {
      makeSearch();
    } else if (searchQuery === "") {
      console.log("empty");
      setResults([]);
    }
  }, [searchQuery, makeSearch]);

  console.log(results);

  return (
    <div>
      Search results {searchQuery}
      <pre>{JSON.stringify(results, null, 1)}</pre>{" "}
    </div>
  );
};

export default SearchResults;
