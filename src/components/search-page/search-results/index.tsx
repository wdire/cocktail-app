"use client";

import { cocktailSearchAction } from "@/actions/cocktail-search.action";
import { CocktailSearchResultItem } from "@/types/cocktail.type";
import { useCallback, useContext, useEffect, useState } from "react";
import CocktailCard from "../../cocktail-card";
import stylesSectionContainer from "../../../styles/containers/section-container.module.scss";
import stylesCardContainer from "../../../styles/containers/cards-container.module.scss";
import { CocktailsContext } from "@/context/cocktails-context";

const SearchResults = () => {
  const [results, setResults] = useState<CocktailSearchResultItem[]>([]);
  const { searchQuery } = useContext(CocktailsContext);

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

  return (
    <div className={stylesSectionContainer.section_container}>
      <div className={stylesCardContainer.cards_container}>
        {results?.map((result, index) => {
          return (
            <CocktailCard
              img_src={result.strDrinkThumb}
              name={result.strDrink}
              key={index}
              cocktail={result}
            />
          );
        })}

        {!results && searchQuery ? (
          <div>No cocktails found with this name</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SearchResults;
