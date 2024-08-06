"use client";

import { CocktailSearchResultItem } from "@/types/cocktail.type";
import React, { useMemo, useState } from "react";

export type CocktailsContext = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  savedCocktails: CocktailSearchResultItem[];
  savedCocktailIds: string[];
  saveCocktail: (cocktail: CocktailSearchResultItem) => void;
  removeCocktail: (cocktail_id: string) => void;
};

// Avoiding initial value
export const CocktailsContext = React.createContext<CocktailsContext>(
  {} as CocktailsContext,
);

export const CocktailsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [savedCocktails, setSavedCocktails] = useState<
    CocktailSearchResultItem[]
  >([]);

  const [searchQuery, setSearchQuery] = useState("");

  const savedCocktailIds = useMemo(() => {
    return savedCocktails.map((cocktail) => cocktail.idDrink);
  }, [savedCocktails]);

  const saveCocktail = (cocktail: CocktailSearchResultItem) => {
    if (!savedCocktailIds?.includes(cocktail.idDrink)) {
      setSavedCocktails([...savedCocktails, cocktail]);
    }
  };

  const removeCocktail = (cocktail_id: string) => {
    if (savedCocktailIds?.includes(cocktail_id)) {
      setSavedCocktails(
        savedCocktails.filter((cocktail) => {
          return cocktail_id !== cocktail.idDrink;
        }),
      );
    }
  };

  return (
    <CocktailsContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        savedCocktails,
        savedCocktailIds,
        removeCocktail,
        saveCocktail,
      }}
    >
      {children}
    </CocktailsContext.Provider>
  );
};
