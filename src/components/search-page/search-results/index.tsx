"use client";

import { cocktailSearchAction } from "@/actions/cocktail-search.action";
import { CocktailSearchResultItem } from "@/types/cocktail.type";
import { useCallback, useContext, useEffect, useState } from "react";
import CocktailCard from "../../cocktail-card";
import stylesSectionContainer from "../../../styles/containers/section-container.module.scss";
import stylesCardContainer from "../../../styles/containers/cards-container.module.scss";
import { CocktailsContext } from "@/context/cocktails-context";
import Loading from "@/components/_helpers/loading/loading";

const SearchResults = () => {
  const [results, setResults] = useState<CocktailSearchResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { searchQuery } = useContext(CocktailsContext);

  const makeSearch = useCallback(async () => {
    try {
      setLoading(true);
      const newSearchResults = await cocktailSearchAction({ searchQuery });
      console.log(newSearchResults);
      setResults(newSearchResults.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
        {!loading &&
          results?.map((result, index) => {
            return (
              <CocktailCard
                img_src={result.strDrinkThumb}
                name={result.strDrink}
                key={index}
                cocktail={result}
              />
            );
          })}

        {!loading && !results && searchQuery ? (
          <div>No cocktails found with this name</div>
        ) : (
          ""
        )}

        {loading ? <Loading /> : ""}
      </div>
    </div>
  );
};

export default SearchResults;
