type CocktailSearchActionProps = {
  searchQuery: string;
};

type CocktailSearchActionResponse = {
  results: unknown[];
};

export const cocktailSearchAction = async ({
  searchQuery,
}: CocktailSearchActionProps): Promise<CocktailSearchActionResponse> => {
  // Fetch request

  return {
    results: [searchQuery],
  };
};
