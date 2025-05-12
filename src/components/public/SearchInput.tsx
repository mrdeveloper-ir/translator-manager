export const SearchInput: React.FC<{
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}> = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search keywords..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="mb-4 p-2 border border-gray-300 rounded w-full"
    />
  );
};
