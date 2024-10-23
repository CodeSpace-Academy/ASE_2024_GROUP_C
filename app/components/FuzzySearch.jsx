// app/components/FuzzySearch.jsx
"use client";
import React, { useState } from "react";
import Fuse from "fuse.js";

const FuzzySearch = ({ recipes, onSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (!searchTerm.trim()) {
      // Return all recipes if the search query is empty
      onSearchResults(recipes);
      return;
    }

    const fuse = new Fuse(recipes, {
      keys: ["title", "ingredients", "category"], // Define the keys to search by
      includeScore: true, // Include scores to evaluate relevance
      threshold: 0.4, // Set the threshold for fuzzy matching (lower values = stricter matching)
    });

    const results = fuse.search(searchTerm).map((result) => result.item);

    // Send the search results back to the parent
    onSearchResults(results);
  };

  return (
    <div className="w-full px-4 py-2">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search recipes..."
        className="w-full px-4 py-2 rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-purple-300"
      />
    </div>
  );
};

export default FuzzySearch;
