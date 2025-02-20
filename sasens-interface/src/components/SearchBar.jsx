import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Você buscou por: ${query}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Digite alguma coisa..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchBar;
