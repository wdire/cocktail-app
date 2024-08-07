"use client";

import { STORAGE_KEYS } from "@/lib/config";
import localStorageManager from "@/lib/local-storage-manager";
import { CocktailSearchResultItem } from "@/types/cocktail.type";
import React, { useEffect, useMemo, useState } from "react";

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

  useEffect(() => {
    const cocktail_saves = localStorageManager.getItem<
      CocktailSearchResultItem[]
    >(STORAGE_KEYS.COCKTAIL_SAVES);

    console.log("cocktail_saves", cocktail_saves);

    if (cocktail_saves && cocktail_saves?.length > 0) {
      setSavedCocktails(cocktail_saves);
    }
  }, []);

  const saveCocktail = (cocktail: CocktailSearchResultItem) => {
    if (!savedCocktailIds?.includes(cocktail.idDrink)) {
      const newSavedCocktails = [...savedCocktails, cocktail];

      setSavedCocktails(newSavedCocktails);
      localStorageManager.setItem(
        STORAGE_KEYS.COCKTAIL_SAVES,
        newSavedCocktails,
      );
    }
  };

  const removeCocktail = (cocktail_id: string) => {
    if (savedCocktailIds?.includes(cocktail_id)) {
      const newSavedCocktails = savedCocktails.filter((cocktail) => {
        return cocktail_id !== cocktail.idDrink;
      });

      setSavedCocktails(newSavedCocktails);
      localStorageManager.setItem(
        STORAGE_KEYS.COCKTAIL_SAVES,
        newSavedCocktails,
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
