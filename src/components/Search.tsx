import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function Search() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 500);

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        placeholder="Type here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p data-testid="debounced">Debounced: {debounced}</p>
    </div>
  );
}
