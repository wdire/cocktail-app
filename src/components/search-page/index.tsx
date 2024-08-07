import SearchBar from "./search-bar";
import SearchResults from "./search-results";
import FloatingSaveButton from "./floating-save-button";
import { getRandomElementsFromArray } from "@/lib/utils";
import { searchSuggessionsArray } from "@/lib/config";

const SearchPage = () => {
  const searchSuggestions = getRandomElementsFromArray(
    searchSuggessionsArray,
    3,
  );

  return (
    <>
      <SearchBar searchSuggestions={searchSuggestions} />
      <SearchResults />
      <FloatingSaveButton />
    </>
  );
};

export default SearchPage;
