import SearchBar from "./search-bar";
import SearchResults from "./search-results";
import FloatingSaveButton from "./floating-save-button";
import { getRandomElementsFromArray } from "@/lib/utils";
import { searchSuggessionsArray } from "@/lib/config";
import { cookies } from "next/headers";

const SearchPage = () => {
  const searchSuggestions = getRandomElementsFromArray(
    searchSuggessionsArray,
    3,
  );

  // Disable caching
  // https://github.com/vercel/next.js/discussions/50045#discussioncomment-7218266

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _cookies = cookies();

  return (
    <>
      <SearchBar searchSuggestions={searchSuggestions} />
      <SearchResults />
      <FloatingSaveButton />
    </>
  );
};

export default SearchPage;
