import {
  CocktailSearchResponse,
  CocktailSearchResultItem,
} from "@/types/cocktail.type";

type CocktailSearchActionProps = {
  searchQuery: string;
};

type CocktailSearchActionResponse = {
  results: CocktailSearchResultItem[];
};

export const cocktailSearchAction = async ({
  searchQuery,
}: CocktailSearchActionProps): Promise<CocktailSearchActionResponse> => {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchQuery,
  );

  const responseJson = (await response.json()) as CocktailSearchResponse;

  console.log(responseJson);

  if (
    (responseJson?.drinks &&
      Array.isArray(responseJson.drinks) &&
      responseJson.drinks.length > 0) ||
    responseJson?.drinks === null
  ) {
    return {
      results: responseJson.drinks,
    };
  }

  throw new Error("Couldn't get drinks");
};
