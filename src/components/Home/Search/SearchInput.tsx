import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { getSearchMovies } from "../../../api/tmdb/movies";

export default function SearchInput() {
  const { setSearch, setLoading } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  // Debounce logic: wait 500ms after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  // Fetch search results based on debounced value
  useEffect(() => {
    if (!debouncedValue) {
      setSearch([]);
      setLoading(false);
      return;
    }

    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const res: any = await getSearchMovies(debouncedValue);
        console.log(res.data.results);
        setSearch(res.data.results);
      } catch (error: any) {
        console.error("Search failed:", error.message);
        setSearch([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [debouncedValue, setSearch, setLoading]);

  return (
    <div className="w-full">
      <div className="flex items-center bg-white rounded-3xl h-10 sm:h-12 px-4">
        <input
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search here..."
          aria-label="Search movies"
          className="w-full h-full bg-transparent text-sm sm:text-base outline-none"
        />
      </div>
    </div>
  );
}
