type SearchResultsProps = {
  searchQuery: string;
};

const SearchResults = ({ searchQuery }: SearchResultsProps) => {
  return <div>Search results {searchQuery}</div>;
};

export default SearchResults;
