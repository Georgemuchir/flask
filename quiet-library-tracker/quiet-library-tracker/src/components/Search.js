// components/Search.js
import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Trigger search logic
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Search Library</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by book title, author, or member name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <button className="bg-blue-500 text-white p-2 mt-2 rounded">Search</button>
      </form>
    </div>
  );
};

export default Search;
